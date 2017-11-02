import {Url} from "./../config/Url";
import {serverValidate} from "./../lib";
import {AsyncStorage} from "react-native";
import {switchToTabScreen, handleResetScreen} from "./../lib/HandleScreen";
import {Navigation} from 'react-native-navigation';

export function ServerRequestWithToken(path, method, values={}) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("accessToken").then(accessToken => {
      if(accessToken) {
        fetch((Url.host + path), params(values, method, JSON.parse(accessToken).token))
        .then((response) => {
          if(response.status == 401) {
            refreshToken().then((result) => {
              resolve(ServerRequestWithToken(path, method, values));
            }).catch((error) => {
              reject(error);
            });
          } else if (!response.ok) {
            throw(response);
          } else {
            resolve(response.json());
          }
        }).catch((error) => {
          reject(error);
        });
      } else {
        Navigation.startSingleScreenApp({
          screen: {
            screen: "session.index",
            navigatorStyle: {
              navBarHidden: true
            }
          }
        });
      }
    })
  })
}

function params(values, method, token) {
  let header;
  if (method == "GET") {
    header = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      }
    }
  } else {
    header = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(values)
    }
  }

  return header;
}

function refreshToken () {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("accessToken").then(accessToken => {
      fetch(`${Url.host}/api/v1/oauth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "grant_type": "refresh_token",
          "refresh_token": JSON.parse(accessToken).refresh_token
        })
      }).then((response) => {
        if(!response.ok) {
          throw(response);
        }
        return(response.json());
      }).then((responseJson) => {
        try {
          AsyncStorage.multiSet([["accessToken", JSON.stringify(responseJson.data.access_token)],
            ["user", JSON.stringify(responseJson.data.user)]]);
          resolve(responseJson);
        } catch (error) {
          throw({status: 100});
        }
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
        reject(error);
      });
  });
}
