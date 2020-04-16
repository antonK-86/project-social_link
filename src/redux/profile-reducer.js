import { profileApi } from "../api/Api";

let initialState = {
  profile: null,
  status: "No status",
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

    case "UPDATE-STATUS":
      return {
        ...state,
        status: action.status,
      };

    case "CLEAR-PROFILE":
      return {
        ...state,
        profile: null,
        status: "No status",
      };

    case "ADD-MESSAGE":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    default:
      return state;
  }
};

export const addMessage = (payload) => ({
  type: "ADD-MESSAGE",
  payload: payload,
});

export const getProfileAction = (profile) => ({
  type: "GET-PROFILE",
  profile: profile,
});

export const clearProfile = (state) => ({
  type: "CLEAR-PROFILE",
});

export const getProfileThunk = (userId) => async (dispatch) => {
  let response = await profileApi.getProfile(userId);
  dispatch(getProfileAction(response.data));
};

export const updateStatus = (status) => ({
  type: "UPDATE-STATUS",
  status: status,
});

export const getProfileStatusThunk = (userId) => (dispatch) => {
  //debugger;
  profileApi.getProfileStatus(userId).then((response) => {
    if (response.data) dispatch(updateStatus(response.data));
  });
};

export default profileReducer;
