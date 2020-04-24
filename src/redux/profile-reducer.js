import { profileApi } from "../api/Api";
import { stopSubmit } from "redux-form";

let initialState = {
  profile: null,
  isEditProfile: false,
  _error: "",
  status: "--",
  messages: [
    {
      avatar: null,
      mesId: 1,
      userName: "Alex",
      message: "Hello",
      date: "13.04.2020 12:35",
    },
    {
      avatar: null,
      mesId: 2,
      userName: "Den",
      message: "You're crazy",
      date: "03.08.2019 11:35",
    },
    {
      avatar: null,
      mesId: 3,
      userName: "Mike",
      message: "Yoo!!",
      date: "18.06.2019 22:37",
    },
    {
      avatar: null,
      mesId: 4,
      userName: "Crage",
      message: "Lorem ipsum sit ammet",
      date: "01.06.2019 02:05",
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };

    case "UPDATE-PROFILE":
      return {
        ...state,
        profile: action.payload,
      };

    case "UPDATE-STATUS":
      return {
        ...state,
        status: action.status,
      };

    case "IS-EDIT-PROFILE":
      return {
        ...state,
        isEditProfile: action.payload,
      };

    case "CLEAR-PROFILE":
      return {
        ...state,
        profile: null,
        status: "--",
      };

    case "ADD-MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case "ERROR-UPDATE-PROFILE":
      return {
        ...state,
        _error: action.error,
      };

    default:
      return state;
  }
};

export const errUpdateProfile = (payload) => ({
  type: "ERROR-UPDATE-PROFILE",
  error: payload,
});

export const addMessage = (payload) => ({
  type: "ADD-MESSAGE",
  payload: payload,
});

export const editProfileAction = (payload) => ({
  type: "IS-EDIT-PROFILE",
  payload: payload,
});

export const getProfileAction = (profile) => ({
  type: "GET-PROFILE",
  profile: profile,
});

export const clearProfile = () => ({
  type: "CLEAR-PROFILE",
});

export const updateStatus = (status) => ({
  type: "UPDATE-STATUS",
  status: status,
});

export const getProfileThunk = (userId) => async (dispatch) => {
  let response = await profileApi.getProfile(userId);
  dispatch(getProfileAction(response.data));
};

//отправляем новый профиль на сервер
export const updateProfileThunk = (data) => async (dispatch, getState) => {
  let response = await profileApi.setProfileInfo(data);
  if (response.data.resultCode === 0) {
    dispatch(getProfileThunk(getState().auth.id));
    dispatch(getProfileStatusThunk(getState().auth.id));
    dispatch(editProfileAction(false));
    dispatch(errUpdateProfile(false));
  } else {
    dispatch(stopSubmit("editProfile", { _error: response.data.messages[0] }));
    //dispatch(errUpdateProfile(response.data.messages[0]));
  }
};

export const savePhotoThunk = (photofile, userId) => async (dispatch) => {
  await profileApi.uploadPhoto(photofile);
  dispatch(getProfileThunk(userId));
};

export const getProfileStatusThunk = (userId) => (dispatch) => {
  profileApi.getProfileStatus(userId).then((response) => {
    if (response.data) dispatch(updateStatus(response.data));
  });
};

//отправляем статус на сервер
export const setProfileStatusThunk = () => async (dispatch, getState) => {
  await profileApi.setProfileStatus(getState().profilePage.status);
  /*.then((response) => {
      if (response.data.resultCode===0);
    });
    */
};

export default profileReducer;
