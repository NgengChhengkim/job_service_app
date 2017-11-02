import {Navigation} from "react-native-navigation";
import {RegisterScreen} from "./screen";
import {switchToTabScreen} from "./lib/HandleScreen";
import {AsyncStorage} from "react-native";

RegisterScreen();

AsyncStorage.getItem("accessToken").then(accessToken => {
  if (accessToken) {
    AsyncStorage.getItem("user").then(user => {
      user = JSON.parse(user);
      if(user && user.completed_account) {
        switchToTabScreen();
      } else {
        Navigation.startSingleScreenApp({
          screen: {
            screen: "complete_registration.recruiter",
            navigatorStyle: {
              navBarHidden: true
            }
          }
        })
      }
    })
  } else {
    Navigation.startSingleScreenApp({
      screen: {
        screen: "session.index",
        navigatorStyle: {
          navBarHidden: true
        }
      }
    })
  }
});
