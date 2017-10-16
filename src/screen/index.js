import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./../reducers";
import ReduxThunk from "redux-thunk";

import {Navigation} from 'react-native-navigation';
import Registration from "./registration";
import ResetPassword from "./reset_password";
import Login from "./session";
import JobFeed from "./job_feed";
import CompleteRegistrationRecruiter from "./complete_registration/Recruiter";
import MultiplePicker from "./../component/multiple_picker/ModalPicker";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export function RegisterScreen() {
  Navigation.registerComponent("registration.index", () => Registration, store, Provider);
  Navigation.registerComponent("reset_password.index", () => ResetPassword, store, Provider);
  Navigation.registerComponent("session.index", () => Login, store, Provider);
  Navigation.registerComponent("job_feed.index", () => JobFeed, store, Provider);
  Navigation.registerComponent("complete_registration.recruiter", () => CompleteRegistrationRecruiter, store, Provider)
  Navigation.registerComponent("multiple_picker.screen", () => MultiplePicker);
}
