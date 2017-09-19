import React, {Component} from "react";
import { View, Image } from "react-native";
import I18n from "./../../i18n/i18n";
import {
  BackgroundImage,
  Title,
  ButtonAction,
  FacebookButton,
  TextField,
  Container,
  Label
} from "./../../component";

export default class RegistrationForm extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container>
          <Title title={I18n.t("sign_in.title")}></Title>
          <TextField placeholder={I18n.t("sign_in.placeholder.email")}></TextField>
          <TextField placeholder={I18n.t("sign_in.placeholder.password")} secureTextEntry={true}></TextField>
          <ButtonAction text={I18n.t("sign_in.login")}></ButtonAction>
          <FacebookButton text={I18n.t("sign_in.login_with_facebook")}></FacebookButton>
          <View style={styles.labelContainer}>
            <Label text={I18n.t("sign_in.create_new_account")}></Label>
            <Label text={I18n.t("sign_in.forget_password")} labelStyle={styles.forgetPassword}></Label>
          </View>
        </Container>
      </BackgroundImage>
    );
  }
}

const styles = {
  forgetPassword: {
    position: "absolute",
    right: 0
  }
}
