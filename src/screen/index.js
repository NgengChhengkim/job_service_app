import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./../reducers";
import ReduxThunk from "redux-thunk";

import { Navigation } from 'react-native-navigation';
import Registration from "./registration";
import ResetPassword from "./reset_password";
import Login from "./session";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export function RegisterScreen() {
  Navigation.registerComponent("registration.index", () => Registration, store, Provider);
  Navigation.registerComponent("reset_password.index", () => ResetPassword, store, Provider);
  Navigation.registerComponent("session.index", () => Login, store, Provider);
}
