import style from "styled-components";

//Testimony
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Link from "next/link";

export const Section = style.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 180.5%;
    color: #FFFFFF;
    align-items: center;
`;

export const Subtitle = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 208.5%;
    color: #FFFFFF;
    align-items: center;
    margin-bottom : 30px;
`;
export const Image = style.img`
    max-width: 100%;
    height: auto;
`;
export const PlayButton = style(Link)`
    background-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px;
    padding: 11px 20px;
`;

//Testimony
export const Section3 = style.section`
    height: 70vh;
    display: flex;
    flex-direction: column;
    background-color: #575B81;
    justify-content: center;
`;

export const Title2 = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 180.5%;
    color: #FFFFFF;
    text-align: center;
    margin :10px;
`;

export const Subtitle2 = style.h6`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
    color: #FFFFFF;
    text-align: center;
    margin : 10px 10px 40px 10px;
`;

export const Subtitle3 = style.h6`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
    color: #FFFFFF;
    margin:0;
`;

export const CustomCard = styled(Card)`
  height: 212px;
  width: 350px;
  background-color: #1e212e;
  padding: 10px;
  border: 2px solid orange;
  border-radius: 10px;
`;

export const CustomCard2 = styled(Card)`
  height: 212px;
  width: 350px;
  background-color: #575b81;
  padding: 10px;
  border: 2px solid white;
  border-radius: 10px;
`;

export const Subheader = styled(Typography)`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.43;
  color: #546e7a;
`;
export const Subheader2 = styled(Typography)`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.43;
  color: #1e212ec5;
`;

//News
export const Section4 = style.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    justify-content: center;
`;

export const Title3 = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 187.5%;
    color: #FFFFFF;
    margin : 20px 0px 10px 0px;
`;

export const Title4 = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: #FFFFFF;
    margin :0px 0px 20px 0px;
`;

export const Subtitle4 = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 208.5%;
    color: #FFFFFF;
    align-items: center;
    margin : 0px 0px 40px 0px;
`;

export const Subtitle5 = style.h6`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 187.5%;
    color: #FFFFFF;
    margin:0;
`;

export const CustomCard3 = styled(Card)`
  width: 1092px;
  height: 169px;
  background-color: #575b81;
  padding: 30px;
  border-radius: 15px;
`;

export const Button = style.a`
    background-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    border-radius: 10px;
    padding: 10px 15px;
`;

//Footer
export const Section5 = style.section`
    display: flex;
    flex-direction: column;
    background: black;
    height: 45vh;
    justify-content: center;
`;

export const Title5 = style.h1`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 153.5%;
    color: #FFFFFF;
`;
export const Subtitle6 = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
`;

export const FooterLink = style.a`
    display : flex;
    flex-direction: row;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 186.3%;
    color: #FFFFFF;

    &:hover {
        color: orange;
        transition: 200ms ease-in;
    }
    &:active {
        color: orange;
        transition: 200ms ease-in;
    }
`;

export const Heading = style.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 26px;
color: #FFFFFF;
`;
export const Copyright = style.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 190.6%;
    color: #FFFFFF;
    justify-content: center;
    align-items: center;
`;
export const Round = style.a`
    margin : 10px;
`;
