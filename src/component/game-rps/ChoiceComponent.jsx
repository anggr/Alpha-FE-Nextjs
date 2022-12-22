import * as Components from "./choice.styled";
import rock from "/assets/batu.svg";
import paper from "/assets/kertas.svg";
import scissors from "/assets/gunting.svg";
import React from "react";

export const ChoiceComponent = ({ value, myChoice, onClick }) => {
  return (
    <>
      <Components.Icon
        bg={rock}
        data-id={myChoice}
        onClick={onClick}
        alt="rock"></Components.Icon>
      <Components.Icon
        bg={paper}
        data-id={myChoice}
        onClick={onClick}
        alt="paper"></Components.Icon>
      <Components.Icon
        bg={scissors}
        data-id={myChoice}
        onClick={onClick}
        alt="scissors"></Components.Icon>
    </>
  );
};
