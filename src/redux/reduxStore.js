import { combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;