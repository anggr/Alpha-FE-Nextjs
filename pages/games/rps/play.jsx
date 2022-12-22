import { useEffect, useState } from "react";
import { Container } from "../../../styles/rps.module";
import Play from "../../../src/component/game-rps/Play";
import withAuth from "../../../src/withAuth";
import { useSelector } from "react-redux";

function GameRps() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);
  const profile = useSelector((state) => state.authReducer.profile);
  return (
    <Container>
      <Play setMyChoice={setMyChoice} />
    </Container>
  );
}
export default withAuth(GameRps);
