import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";

export const handleResetPassword = (values) => {
  return (dispatch) => {
    dispatch({type: "START_RESET_PASSWORD"});

    fetch(`${Url.host}/api/v1/reset_password/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": values.email
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
        type: "RESET_PASSWORD_SUCCESS"
      });
      // TO DO
      alert("Email has been sent successful");
    })
    .catch((error) => {
      serverValidate(error, "ResetPasswordForm", dispatch);
      dispatch({
        type: "RESET_PASSWORD_FAIL"
      });
    });
  }
}
