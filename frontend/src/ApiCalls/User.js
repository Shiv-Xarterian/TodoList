import axios from "axios";
import { ErrorCatchUser, LoadingState, UserUpdate } from "../Redux/UserSlice";

export const LoginUser = (dispatch) => async (Email, Password) => {
  try {
    dispatch(LoadingState());
    const { data } = await axios.put(`${process.env.REACT_APP_APICALL}/login`, {
      UserEmail: Email,
      UserPassword: Password,
    });
    dispatch(UserUpdate({ User: data.User, Message: data.Message }));
    localStorage.setItem("token", data.Token);
  } catch (error) {
    dispatch(ErrorCatchUser(error.response.data.Error));
  }
};

export const RegisterUser =
  (dispatch) => async (UserName, UserEmail, UserPassword) => {
    try {
      dispatch(LoadingState());
      const { data } = await axios.post(
        `${process.env.REACT_APP_APICALL}/register`,
        {
          UserName,
          UserEmail,
          UserPassword,
        }
      );
      dispatch(UserUpdate({ User: data.User, Message: data.Message }));
    } catch (error) {
      dispatch(ErrorCatchUser(error.response.data.Error));
    }
  };

export const LoadUser = async (dispatch) => {
  try {
    dispatch(LoadingState());
    const { data } = await axios.get(
      `${process.env.REACT_APP_APICALL}/loaduser`,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    dispatch(UserUpdate({ User: data.User, Message: data.Message }));
  } catch (error) {
    dispatch(ErrorCatchUser(error.response.data.Error));
  }
};
