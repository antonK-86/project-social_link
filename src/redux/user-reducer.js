import { usersApi } from "../api/Api";

let initialState = {
  users: [],
  count: 20,
  currentPage: 1,
  totalCount: 0,
  countPage: 12, //кол-во отображ страниц
  limitPages: 12, //номер последней отображ страницы
  j: 1,
  numList: 1, //номер списокa users при прокрутке странице
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET-USERS":
      return {
        ...state,
        users: action.users,
        totalCount: action.totalCount,
      };

    case "ADD-USERS-ON-LIST":
      return {
        ...state,
        //users: .concat(),
        users: [...state.users, ...action.users],
        numList: state.numList + 1,
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

    case "LOADING": {
      return {
        ...state,
        loading: action.loading,
      };
    }

    case "CLEAR-USERS":
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

//ActionCreators

export const loadingAction = (loading) => ({
  type: "LOADING",
  loading,
});

export const clearUsers = () => ({
  type: "CLEAR-USERS",
});

const getUsersAction = (users, totalCount) => ({
  type: "GET-USERS",
  users: users,
  totalCount: totalCount,
});

const addUsersAction = (users) => ({
  type: "ADD-USERS-ON-LIST",
  users,
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

//THUNKs

export const getUsersThunk = (count, page) => (dispatch) => {
  usersApi.getUsers(count, page).then((response) => {
    dispatch(getUsersAction(response.data.items, response.data.totalCount));
  });
};

//добавляет пользователей на страницу при прокрутке
export const addUsersThunk = (count, page) => async (dispatch) => {
  dispatch(loadingAction(true));
  let response = await usersApi.getUsers(count, page);
  //debugger;
  dispatch(addUsersAction(response.data.items));
  dispatch(loadingAction(false));
};

export const followThunk = (userId) => (dispatch) => {
  usersApi.follow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(followAction(userId));
    }
  });
};

export const unFollowThunk = (userId) => (dispatch) => {
  usersApi.unFollow(userId).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(unFollowAction(userId));
    }
  });
};

export default userReducer;
