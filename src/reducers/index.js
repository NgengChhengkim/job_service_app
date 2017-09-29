import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import SignUpReducers from "./SignUpReducers";
import LoginReducers from "./LoginReducers"

export default combineReducers({
  form: form,
  signUpData: SignUpReducers,
  loginData: LoginReducers
})
