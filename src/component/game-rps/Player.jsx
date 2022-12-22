import React from "react";

const Player = ({ myChoice, pcChoice, gameResult }) => {
  return (
    <>
      {gameResult === "" ? (
        <h4>Select a Choice</h4>
      ) : (
        <h4>Players Choice: {myChoice}</h4>
      )}
    </>
  );
};

export default Player;
