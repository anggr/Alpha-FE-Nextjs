import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0b0e1c !important;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
  }
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Overpass:wght@100;400;500&display=swap');
  h1,
  h2,
  h3,
  h4,
  span,
  text {
    color: white;
    font-family: 'Poppins', sans-serif;
  }
`;
export const Game = styled.div`
  height: 100%;
  justify-content: space-between !important;
`;

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em;
  width: 100vw;
  height: 100vh;
`;

export const Row = styled.div`
  background-color: #575b81;
  border-color: solid orange !important;
  border-width: 5px !important;
  border-radius: 15px;
  padding: 1.25em 0.85em;
  width: 45em;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
`;

export const PlayerChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: space-between !important;
`;

export const PcChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: space-between !important;
`;

export const ResetRow = styled.div`
  padding: 1.25em;
`;
