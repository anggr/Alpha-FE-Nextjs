import styled from "styled-components";
import Image from "next/image";

export const Icon = styled(Image)`
  width: 96px;
  height: 92px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // background-image: url(${(props) => props.bg});
  &:hover {
    color: #424242;
    -webkit-transition: all 0.1s ease-in;
    -moz-transition: all 0.1s ease-in;
    -ms-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    opacity: 1;
    transform: scale(1.15);
    -ms-transform: scale(1.15); /* IE 9 */
    -webkit-transform: scale(1.15); /* Safari and Chrome */
  }
`;
export const PcIcon = styled.div`
  width: 96px;
  height: 92px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ;
  &:hover {
    color: #424242;
    -webkit-transition: all 0.1s ease-in;
    -moz-transition: all 0.1s ease-in;
    -ms-transition: all 0.1s ease-in;
    -o-transition: all 0.1s ease-in;
    transition: all 0.1s ease-in;
    opacity: 1;
    transform: scale(1.15);
    -ms-transform: scale(1.15); /* IE 9 */
    -webkit-transform: scale(1.15); /* Safari and Chrome */
  }
`;
export const Paper = `
  background-image: url("../../assets/kertas.svg");
`;
export const Rock = `
  background-image: url("../../assets/batu.svg");
`;
export const Scissors = `
  background-image: url("../../assets/gunting.svg");
`;
export const PcChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  justify-content: space-between;
`;
export const Game = styled.div`
  height: 100%;
  justify-content: space-between !important;
`;
export const TextComputer = styled.div``;
