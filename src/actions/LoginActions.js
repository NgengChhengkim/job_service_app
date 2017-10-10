import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";
import {AsyncStorage} from "react-native";
import {handleResetScreen, switchToTabScreen} from "./../lib/HandleScreen";

export const handleLogin = (values, navigator) => {
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
        AsyncStorage.multiSet([["accessToken", JSON.stringify(responseJson.data.access_token)],
            ["user", JSON.stringify(responseJson.data.user)]]);
        if(responseJson.data.user.completed_account) {
          switchToTabScreen();
        } else {
          handleResetScreen(navigator, "complete_registration.recruiter", true);
        }
        dispatch({
          type: "LOGIN_SUCCESS"
        });
      } catch (error) {
        throw {status: 100};
      }
    })
    .catch((error) => {
      serverValidate(error, "Login", dispatch);
      dispatch({
        type: "LOGIN_FAIL"
      });
    });
  }
}
