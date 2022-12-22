import style from 'styled-components';

import Link from 'next/link';

export const Section = style.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Title = style.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 180.5%;
    color: #FFFFFF;
`;

export const Subtitle = style.h4`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 180.5%;
    color: #FFFFFF;
    margin-bottom : 20px;
`;

export const Title2 = style.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 180.5%;
    color: #FFFFFF;
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

export const PlayButton = style(Link)`
    background-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px;
    padding: 11px 20px;
    position: absolute;
`;