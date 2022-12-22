import React from "react";
import * as Components from "./choice.styled";
// import rock from "../../../public/assets/batu.svg";
// import paper from "../../../public/assets/kertas.svg";
// import scissors from "../../../public/assets/gunting.svg";

const Com = ({ myChoice, pcChoice, gameResult }) => {
  return (
    <>
      <Components.Game>
        <Components.PcChoice>
          <h3>Computer</h3>
          {myChoice === "" ? (
            <>
              <h4>?</h4>
              <h4>Waiting Players Choice</h4>
            </>
          ) : (
            <>
              {pcChoice == "rock" && (
                <Components.Icon
                  src="/assets/batu.svg"
                  width="96"
                  height="92"
                  alt="rock"></Components.Icon>
              )}
              {pcChoice == "paper" && (
                <Components.Icon
                  src="/assets/kertas.svg"
                  width="96"
                  height="92"
                  alt="paper"></Components.Icon>
              )}
              {pcChoice == "scissors" && (
                <Components.Icon
                  src="/assets/gunting.svg"
                  width="96"
                  height="92"
                  alt="scissors"></Components.Icon>
              )}
              <h4>PCs Choice: {pcChoice}</h4>
            </>
          )}
        </Components.PcChoice>
      </Components.Game>
    </>
  );
};

export default Com;
