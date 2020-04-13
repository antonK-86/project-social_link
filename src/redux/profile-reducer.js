import { profileApi } from "../api/Api";

let initialState = {
  profile: null,
  status: " ",
  userId: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-PROFILE":
      return {
        ...state,
        profile: action.profile,
      };
    case "GET-PROFILE-STATUS":
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const getProfileAction = (profile) => ({
  type: "GET-PROFILE",
  profile: profile,
});

export const getProfileStatusAction = (status) => ({
  type: "GET-PROFILE-STATUS",
  status: status,
});

export const getProfileThunk = (userId) => (dispatch) => {
  profileApi.getProfile(userId).then((response) => {
    dispatch(getProfileAction(response.data));
  });
};

export const getProfileStatusThunk = (userId) => (dispatch) => {
  profileApi.getProfileStatus(userId).then((response) => {
    // debugger;
    if (!response.data) dispatch(getProfileStatusAction(" "));
    else {
      dispatch(getProfileStatusAction(response.data));
    }
  });
};

export default profileReducer;
