import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Link from 'next/link'


export const Root = styled.header`
    height: 90px;
    background-color: #181B26;
    width: 100%;
    position: sticky;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-botton: 40px;
`;

export const LinkLogo = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    font-size: 29px;
    line-height: 153.5%;
    color: white;
    text-decoration: none;
`;

export const DivLink = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
`;

export const NavLink = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    text-decoration: none;

    &:hover {
        color: orange;
        transition: 200ms ease-in;
    }
    &:active {
        color: orange;
        transition: 200ms ease-in;
    }
`;

export const Username = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: white;
    margin-right: 10px;

`;

export const Auth = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;
`;

export const ButtonSignIn = styled.a`
    background-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px;
    padding: 11px 20px;
`;

export const ButtonSignUp = styled.a`
    border-style: solid;
    border-color: orange;
    color: white;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 10px;
    padding: 11px;
`;
