import { usersApi } from "../api/Api";

let initialState = {
  users: [],
  count: 28,
  currentPage: 1,
  totalCount: 0,
  countPage: 12, //кол-во отображ страниц
  limitPages: 12, //номер последней отображ страницы
  j: 1,
  //loading: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-USERS":
      return {
        ...state,
        users: action.users,
        totalCount: action.totalCount,
      };

    case "CURRENT-PAGE": {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case "EDIT-PAGES": {
      return {
        ...state,
        limitPages: action.limitPages,
        j: action.j,
      };
    }

    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: true };
          return u;
        }),
      };
    }

    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) return { ...u, followed: false };
          return u;
        }),
      };
    }
    /*
    case "LOADING": {
      return {
        ...state,
        loading: state.loading.push(action.userId),
      };
    }
*/
    default:
      return state;
  }
};

const getUsersAction = (users, totalCount) => ({
  type: "GET-USERS",
  users: users,
  totalCount: totalCount,
});

export const getCurrentPage = (currentPage) => ({
  type: "CURRENT-PAGE",
  currentPage: currentPage,
});

export const editPages = (limitPages, j) => ({
  type: "EDIT-PAGES",
  limitPages: limitPages,
  j: j,
});

const followAction = (userId) => ({
  type: "FOLLOW",
  userId: userId,
});

const unFollowAction = (userId) => ({
  type: "UNFOLLOW",
  userId: userId,
});
/*
export const loadingAction = (userId) => ({
  type: "LOADING",
  userId: userId,
});
*/
export const getUsersThunk = (count, page) => (dispatch) => {
  usersApi.getUsers(count, page).then((response) => {
    dispatch(getUsersAction(response.data.items, response.data.totalCount));
  });
};

export const followThunk = (userId) => (dispatch) => {
  //dispatch(loadingAction(userId));
  usersApi.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followAction(userId));
    }
    //dispatch(loadingAction(userId));
  });
};

export const unFollowThunk = (userId) => (dispatch) => {
  //dispatch(loadingAction(userId));
  usersApi.unFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unFollowAction(userId));
    }
    //dispatch(loadingAction(userId));
  });
};

export default userReducer;
