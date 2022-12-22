import { GET_PROFILE, CHANGE_PROFILE } from "../type/authType";

const initialState = {
  profile: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.profile,
        first_name: action.first_name,
        last_name: action.last_name,
        email: action.email,
        avatar: action.avatar,
      }
    default:
      return state;
  }
};
export default authReducer;
