import axios from "../../utils/axios";
import { GET_PROFILE } from "../type/authType";
import Router from "next/router";
import { toast } from "react-toastify";
export const getProfile = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/me`);
    dispatch({
      type: GET_PROFILE,
      profile: data.user.username,
      userId: data.user.id,
      first_name: data.user.first_name,
      last_name: data.user.last_name,
      email: data.user.email,
      avatar: data.user.avatar,
    })
  } catch (error) {
    console.log(error);
  }
};

export const doLogin = (body) => async () => {
  try {
    const { data } = await axios.post("/login", body);
    localStorage.setItem("_q", data.data.accessToken);
    toast.success("Login success, please wait");
    window.location.reload();
    Router.push("/");
  } catch (error) {
    toast.error(error.message);
  }
};
export const doRegister = async (body) => {
  try {
    await axios.post("/register", body);
    toast.success("silahkan login");
  } catch (error) {
    toast.error(error.message);
  }
};
export const forgotPassword = async (body) => {
  try {
    await axios.put("/forgotPassword", body);
    toast.success("Reset password request sent, please check your email");
  } catch (error) {
    toast.error(error.message);
  }
};
export const resetPassword = async (body) => {
  try {
    await axios.put("/resetPassword", body);
    toast.success("Password reset, please login");
  } catch (error) {
    toast.error(error.message);
  }
};

export const changeAvatar = async (file) => {
  try {
    console.log(file);
    const PROXY_URL = "https://proxy.cors.sh/";
    const URL =
      "https://api.imgbb.com/1/upload?key=f5ed0b938d0675b503b35ba0d597add9";
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    const config = {
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
      },
    };
    const { data } = await axios.post(PROXY_URL + URL, bodyFormData, config);
    console.log(data);
    return data.data;
  } catch (error) {
    toast.error(error.message);
  }
};

// export const changeAvatar = async (file) => {
//   try {
//     const bodyFormData = new FormData();
//     bodyFormData.append("image", file);
//     const config = {
//       headers: { "Content-Type": "multipart/form-data" },
//     };
//     const rawResponse = await fetch(
//       "https://api.imgbb.com/1/upload?key=f5ed0b938d0675b503b35ba0d597add9",
//       {
//         method: "post",
//         body: bodyFormData,
//         headers: config,
//       }
//     );

//     const content = await rawResponse.json();
//     console.log(content);
//     return content.data;
//   } catch (error) {
//     toast.error(error.message);
//   }
// };
