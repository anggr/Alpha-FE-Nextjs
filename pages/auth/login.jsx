import React, { useState, useEffect } from "react";
import * as Components from "../../styles/auth.module";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { doLogin } from "../../src/store/actions/authActions";
import Router from "next/router";

export default function Login() {
  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("_q");

    if (data) {
      Router.push("/");
    }
  }, []);

  const handleChange = (name) => (e) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const handleLogin = async () => {
    const body = {
      username: value.username,
      password: value.password,
    };
    try {
      await dispatch(doLogin(body));
    } catch (error) {}
  };
  return (
    <Components.Container>
      <ToastContainer />
      <Components.FormContainer>
        <Components.LoginContainer>
          <Components.LoginForm>
            {/* <Components.BtnGoogleLogin variant="contained">
              Sign In with Google
            </Components.BtnGoogleLogin>
            <Components.Rectangle>or</Components.Rectangle> */}
            <Components.Input
              placeholder="Username"
              type="string"
              onChange={handleChange("username")}
              required
            />
            <Components.Input
              placeholder="Password"
              type="password"
              onChange={handleChange("password")}
              required
            />
            <Components.BtnLogin variant="contained" onClick={handleLogin}>
              Sign In →
            </Components.BtnLogin>
            <p>
              Not a member?&nbsp;
              <Components.CreateAccount href="/auth/register">
                Create an account.
              </Components.CreateAccount>
            </p>
            <Components.CreateAccount href="/auth/forgot">
              Forgot your password?
            </Components.CreateAccount>
          </Components.LoginForm>
        </Components.LoginContainer>
      </Components.FormContainer>
    </Components.Container>
  );
}
