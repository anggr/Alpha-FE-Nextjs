import * as Components from "./reset.styled";

export const Reset = ({ onClick, myChoice }) => {
  return (
    myChoice !== "" && (
      <Components.ResetButton
        onClick={onClick}
        variant="contained"
        color="warning">
        Reset
      </Components.ResetButton>
    )
  );
};
