import styled from "styled-components";
import { Button } from "@mui/material/";
// import { Link } from "react-router-dom";
import Link from "next/link";

export const Container = styled.div`
  background-color: #030323;
  display: flex !important;
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: white;
  }
  p {
    color: white;
  }
`;
export const Logo = styled.div`
  width: 80%;
  margin-bottom: 2rem;
  cursor: pointer;
`;
export const FormContainer = styled.div`
  display: flex !important;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 80px;

  width: 535px;
  height: 35em;
  left: 452px;
  top: 209px;

  /* 2 */

  background: #181b26;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100em;
`;
export const ForgotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 80px;

  width: 435px;
  height: 425px;
  left: 452px;
  top: 209px;

  /* 2 */

  background: #181b26;
`;
export const BtnLogin = styled(Button)`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  color: #ffffff !important;
  justify-content: center;
  align-items: center;
  padding: 13px 20px 13px 24px;
  gap: 6px;
  size: 16px;

  width: 375px;
  height: 48px;

  /* Primary */

  background: #fb8500 !important;
  border-radius: 4px !important;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const BtnGoogleLogin = styled.button`
  padding: 13px 20px 13px 24px;
  gap: 6px;

  width: 375px;
  height: 48px;
  color: white;

  background: #000000 !important;
  border-radius: 4px !important;
`;
export const Input = styled.input`
  height: 34px;
  width: 370px;
  left: 0%;
  right: 0%;
  top: 0px;
  padding: 13px 20px 13px 24px;

  /* Black-Grayscale/300 */

  border: 3px solid #f9f9f9;
  border-radius: 4px;
  background-color: #00000000;
  color: white;
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: white;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: white;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: white;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: white;
  }
`;
export const a = styled.a`
  color: white;
`;
export const CreateAccount = styled(Link)`
  color: white;
  &:link {
    white-space: pre;
    text-decoration: underline !important;
  }
`;
export const Rectangle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  // gap: 10px;
  width: 2.5em;
  height: 1.3em;

  background-color: #ffffff !important;
`;
