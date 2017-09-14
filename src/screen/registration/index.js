import React, {Component} from "react";
import { View, Image } from "react-native";
import I18n from "./../../i18n/i18n";
import Title from "./../../component/Title";
import ButtonAction from "./../../component/ButtonAction";
import FacebookButton from "./../../component/FacebookButton";
import TextField from "./../../component/TextField";

export default class RegistrationForm extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image source={require("./../../images/background.png")} style={styles.backgroundImage}>
          <Title title="Welcom"></Title>
          <TextField placeholder={I18n.t("registration.placeholder.name")}></TextField>
          <TextField placeholder={I18n.t("registration.placeholder.email")}></TextField>
          <TextField placeholder={I18n.t("registration.placeholder.password")}></TextField>
          <TextField placeholder={I18n.t("registration.placeholder.confirm_password")}></TextField>
          <ButtonAction text={I18n.t("registration.create")}></ButtonAction>
          <FacebookButton text={I18n.t("registration.sign_up_facebook")}></FacebookButton>
        </Image>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    // padding: 20,
    // flex: 1,
  }
}
