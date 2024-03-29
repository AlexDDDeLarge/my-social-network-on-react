import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import messagesPageReducer from "./messagesPageReducer";
import profilePageReducer from "./profilePageReducer";
import usersPageReducer from "./usersPageReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import friendsReducer from "./friendsReducer";

let rootReducer = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: messagesPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  friends: friendsReducer
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux dev tools
let store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

// let store = createStore(reducers, applyMiddleware(thunk));

export default store;