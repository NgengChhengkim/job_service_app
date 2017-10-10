import {combineReducers} from "redux";
import { reducer as form } from 'redux-form';
import SignUpReducers from "./SignUpReducers";
import ResetPasswordReducers from "./ResetPasswordReducers";
import LoginReducers from "./LoginReducers";
import CompleteRegistrationRecruiterReducers from "./CompleteRegistrationRecruiterReducers";

export default combineReducers({
  form: form,
  signUpData: SignUpReducers,
  resetPasswordData: ResetPasswordReducers,
  loginData: LoginReducers,
  completeRegistrationRecruiterData: CompleteRegistrationRecruiterReducers
})
