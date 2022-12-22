import React, { useEffect, useState } from "react";
import * as Components from "./gamerps.styled";
import Com from "./Com";
import Scoreboard from "./Scoreboard";
import Result from "./Result";
import * as Choice from "./choice.styled";
import { Reset } from "./Reset";
import Player from "./Player";

import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../../store/actions/scoreActions";
import { getProfile } from "../../store/actions/authActions";

export default function Play() {
  let [game, setGame] = useState({
    myChoice: "",
    pcScore: 0,
    userScore: 0,
    score: 0,
    round: 0,
    pcChoice: "",
    gameResult: "",
  });
  const dispatch = useDispatch();

  const reset = () => {
    setGame({
      ...game,
      myChoice: "",
      round: 0,
      userScore: 0,
      pcScore: 0,
      score: 0,
      pcChoice: "",
      gameResult: "",
      gameId: "",
    });
  };
  const { score, round } = game;

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("_q");
    //console.log(token);
    if (!data) {
      Router.push("/auth/login");
    }
    getProfile();
  }, []);

  useEffect(() => {
    if (game.round == 3) {
      if (game.userScore > game.pcScore) {
        setGame({
          ...(game.score += 1),
          ...(game.gameResult = "congratsWin"),
        });
      } else if (game.pcScore > game.userScore) {
        setGame({
          ...(game.score -= 1),
          ...(game.gameResult = "congratsLose"),
        });
      }
      setGame({
        ...game,
      });
      postScore(profile);
    }
  }, [game.round]);

  // const fetchProfile = async () => {
  //   await dispatch(getProfile());
  // };
  // useEffect(() => {
  //   fetchProfile();
  // }, []);
  const userId = useSelector((state) => state.authReducer.user_id);

  const postScore = async () => {
    const body = {
      userID: userId,
      gameId: 1,
      score: game.score,
    };
    try {
      await dispatch(updateScore(body));
    } catch (error) {}
  };

  const play = (e) => {
    const myChoice = e.target.dataset.id;

    const pcChoice = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];

    if (game.round < 3) {
      if (myChoice === "rock" && pcChoice === "scissors") {
        setGame({
          ...(game.userScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "rock" && pcChoice === "paper") {
        setGame({
          ...(game.pcScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else if (myChoice === "scissors" && pcChoice === "paper") {
        setGame({
          ...(game.userScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "scissors" && pcChoice === "rock") {
        setGame({
          ...(game.pcScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else if (myChoice === "paper" && pcChoice === "rock") {
        setGame({
          ...(game.userScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "win"),
        });
      } else if (myChoice === "paper" && pcChoice === "scissors") {
        setGame({
          ...(game.pcScore += 1),
          ...(game.round += 1),
          ...(game.gameResult = "lose"),
        });
      } else {
        setGame({ ...(game.gameResult = "draw") });
      }
    } else {
    }

    setGame({
      ...game,
      myChoice,
      pcChoice,
    });
  };

  return (
    <>
      {/* <Navbar /> */}
      <Components.GlobalStyle />
      <Components.Wrapper>
        <Components.Row>
          <Components.Col>
            <Components.Game>
              <Components.PlayerChoice>
                <h3>Player 1</h3>
                <Choice.Icon
                  src="/assets/batu.svg"
                  data-id="rock"
                  onClick={play}
                  width="96"
                  height="92"
                  alt="rock"></Choice.Icon>
                <Choice.Icon
                  src="/assets/kertas.svg"
                  data-id="paper"
                  onClick={play}
                  width="96"
                  height="92"
                  alt="paper"></Choice.Icon>
                <Choice.Icon
                  src="/assets/gunting.svg"
                  data-id="scissors"
                  onClick={play}
                  width="96"
                  height="92"
                  alt="scissors"></Choice.Icon>
                <Player {...game}></Player>
              </Components.PlayerChoice>
            </Components.Game>
          </Components.Col>
          <Components.Col>
            <Result {...game}></Result>
          </Components.Col>

          <Components.Col>
            <Components.PcChoice>
              <Com {...game}></Com>
            </Components.PcChoice>
          </Components.Col>
        </Components.Row>
        <Components.ResetRow>
          <Reset onClick={reset} />
        </Components.ResetRow>
        <div>
          <Scoreboard score={score} round={round} />
        </div>
      </Components.Wrapper>
    </>
  );
}
