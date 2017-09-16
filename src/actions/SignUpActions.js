import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";

const USER_TYPE = ["JobSeeker", "Recruiter"];

export const handleRegistration = (values) => {
  return (dispatch) => {
    dispatch({type: "START_REGISTRATION"});

    fetch(`${Url.host}/api/v1/registration/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": values.name,
        "email": values.email,
        "password": values.password,
        "password_confirmation": values.confirm_password,
        "type": USER_TYPE[values.user_type]
      })
    })
    .then((response) => {
      if(!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((responseJson) => {
      dispatch({
        type: "REGISTRATION_SUCCESS",
        payload: responseJson
      });
    })
    .catch((error) => {
      serverValidate(error, "Registrations", dispatch);
      dispatch({
        type: "REGISTRATION_FAIL"
      });
    });
  }
}
