import React, { useState, useEffect } from "react";
import * as Components from "../../styles/auth.module";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Title } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../src/store/actions/authActions";
import Router from "next/router";

export default function Forgot() {
  const [value, setValue] = useState({
    email: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("_q");
    //console.log(token);
    if (data) {
      Router.push("/");
    }
  }, []);

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const changeConfirmPassword = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
    if (!value) {
      toast.error("Confirm Password tidak boleh kosong");
    } else if (password !== value) {
      toast.error("password tidak cocok");
    } else {
    }
  };
  // const handlePassword = async () => {
  //   try {
  //     const { data } = await axios.post("http://localhost:4000/user/login", {
  //       username: value.username,
  //       password: value.password,
  //     });
  //     localStorage.setItem("_q", data.data.token);
  //     window.location.reload();
  //   } catch (error) {
  //     toast.error("Login error!");
  //   }
  // };
  const handlePassword = async () => {
    try {
      dispatch(
        resetPassword({
          password: value.password,
          token: match.params.token,
        })
      );
    } catch (error) {}
  };
  return (
    <Components.Container>
      {/* <Link to='/'>
        <img src={logo} alt='logo' className={style.logo} />
      </Link> */}
      <ToastContainer />
      <Components.FormContainer>
        <Components.ForgotContainer>
          <Components.LoginForm>
            <Components.Input
              placeholder="New password"
              type="password"
              onChange={handleChange("password")}
              required
            />
            <Components.Input
              placeholder="Confirm password"
              type="password"
              onChange={handleChange("confirmPassword")}
              required
            />
            <Components.BtnLogin variant="contained" onClick={handlePassword}>
              Reset Password
            </Components.BtnLogin>
            <p>
              Not a member?&nbsp;
              <Components.CreateAccount href="/auth/register">
                Create an account.
              </Components.CreateAccount>
            </p>
          </Components.LoginForm>
        </Components.ForgotContainer>
      </Components.FormContainer>
    </Components.Container>
  );
}
