import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form"; //для создания form
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

//объедидение reducer`ов
let rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk)); //создаем store из reducera

export default store;

window.store = store;
