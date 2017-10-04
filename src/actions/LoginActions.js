import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";
import {AsyncStorage} from "react-native";

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
      try {
        AsyncStorage.multiSet([["accessToken", responseJson.data.access_token.token],
          ["refreshToken", responseJson.data.access_token.refresh_token]]);
      } catch (error) {
        throw {status: 100};
      }

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
