import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import SignUpReducers from "./SignUpReducers";
import ResetPasswordReducers from "./ResetPasswordReducers";

export default combineReducers({
  form: form,
  signUpData: SignUpReducers,
  resetPasswordData: ResetPasswordReducers
})
