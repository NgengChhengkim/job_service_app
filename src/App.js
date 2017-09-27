import { Navigation } from 'react-native-navigation';
import { RegisterScreen } from "./screen";

RegisterScreen();

Navigation.startSingleScreenApp({
  screen: {
    screen: "registration.index",
    navigatorStyle: {
      navBarHidden: true
    }
  }
});
