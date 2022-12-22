import axios from "../../utils/axios";
import {
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../type/userType";
import { toast } from "react-toastify";

export const updateProfile = (username, first_name, last_name, email) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_REQUEST,
        loading: true,
      });
      const { data } = await axios.put(`/user/me/update`, {
        username,
        first_name,
        last_name,
        email,
      });
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error.message);
    }
  };
};
