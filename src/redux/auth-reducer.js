import { authApi, securityApi } from "../api/Api";
import { stopSubmit } from "redux-form";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  photo: "",
  captcha: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        ...action.payload,
      };

    case "GET-CAPTCHA":
      return {
        ...state,
        captcha: action.payload,
      };

    case "GET_PHOTO":
      return {
        ...state,
        photo: action.payload,
      };
    default:
      return state;
  }
};

export const getCaptchaAction = (payload) => ({
  type: "GET-CAPTCHA",
  payload,
});

export const authAction = (id, email, login, isAuth) => ({
  type: "AUTH",
  payload: { id, email, login, isAuth },
});

export const getPhotoAction = (photo) => ({
  type: "GET_PHOTO",
  payload: photo,
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

export const signInThunkC = (
  email,
  password,
  rememberMe = false,
  captcha = null
) => (dispatch) => {
  authApi.signIn(email, password, rememberMe, captcha).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authThunkC());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaThunkC());
      }
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

//получение captcha
export const getCaptchaThunkC = () => async (dispatch) => {
  let response = await securityApi.getCaptcha();
  dispatch(getCaptchaAction(response.data.url));
};

export default authReducer;
