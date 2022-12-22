import styled from "styled-components";
import Link from "next/link";
import { Button, TextField, Container } from "@mui/material/";

export const Title = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 180.5%;
  color: #ffffff;
  align-items: center;
`;
export const TxtField = styled(TextField)`
  color: white !important;
  & .MuiFilledInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
    color: white;
  }
  & .Mui-disabled {
    color: white !important;
  }
  & .css-10botns-MuiInputBase-input-MuiFilledInput-input.Mui-disabled {
    opacity: 1;
    -webkit-text-fill-color: white;
  }
`;
export const ProfileContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-contents: center;
`;
export const EditProfileBtn = styled(Button)`
  color: white !important;
`;
export const EditProfileLinkBtn = styled(Button)`
  color: white !important;
`;
export const EditProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-evenly;
  height: 20em;
`;
export const EditAvatarForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-evenly;
  height: 5em;
`;
export const Input = styled.input`
  display: hidden;
`;
