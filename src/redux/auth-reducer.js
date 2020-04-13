import { authApi } from "../api/Api";
import { stopSubmit } from "redux-form";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const authAction = (id, email, login, isAuth) => ({
  type: "AUTH",
  payload: { id, email, login, isAuth },
});

export const authThunkC = () => (dispatch) => {
  // return - возвращает результат promisа, для использ. в appReducer, при инициализации приложения
  return authApi.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(authAction(id, email, login, true));
    }
  });
};

export const signInThunkC = (email, password, rememberMe) => (dispatch) => {
  authApi.signIn(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authThunkC());
    } else {
      //ошибка при отправке неверных данных, "signIn" - название формы
      dispatch(stopSubmit("signIn", { _error: response.data.messages[0] }));
    }
  });
};

export const signOutThunkC = (email, password, rememberMe) => (dispatch) => {
  authApi.signOut().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authAction(null, null, null, false));
    }
  });
};

export default authReducer;
