import { combineReducers, createStore } from "redux";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer
});

let store = createStore(reducers);

export default store;