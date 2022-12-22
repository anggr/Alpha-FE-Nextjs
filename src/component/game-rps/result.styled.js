import styled from "styled-components";

export const Result = styled.span`
  font-size: larger;
  width: 2em;
  height: 5em;
  padding: 2em;
  border-radius: 0.75em;
  color: white !important;
  background-color: ${(props) => props.color};
`;
