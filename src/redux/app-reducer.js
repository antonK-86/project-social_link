import { authThunkC } from "./auth-reducer";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITIALIZED":
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initAction = () => ({
  type: "INITIALIZED",
});

export const initApp = () => (dispatch) => {
  let promise = dispatch(authThunkC());
  //promise2=dispatch(action2);
  //promise3=dispatch(action2);
  //Promise.all([promise, promise2, promise3]).then(()=>{})
  promise.then(() => {
    dispatch(initAction());
  });
};

export default appReducer;
