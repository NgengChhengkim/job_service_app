import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";

export const handleLogin = (values) => {
  return (dispatch) => {
    dispatch({type: "START_LOGIN"});

    fetch(`${Url.host}/api/v1/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "grant_type": "password",
        "email": values.email,
        "password": values.password
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
        type: "LOGIN_SUCCESS",
        payload: responseJson
      });
    })
    .catch((error) => {
      serverValidate(error, "Login", dispatch);
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
  }
}
