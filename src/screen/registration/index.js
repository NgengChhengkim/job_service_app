import React, {Component} from "react";
import { View, Image } from "react-native";
import I18n from "./../../i18n/i18n";
import { BackgroundImage, Title, ButtonAction, FacebookButton, TextField, Container } from "./../../component";

export default class RegistrationForm extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container>
          <Title title={I18n.t("registration.title")}></Title>
          <TextField placeholder={I18n.t("registration.placeholder.name")}></TextField>
          <TextField placeholder={I18n.t("registration.placeholder.email")}></TextField>
          <TextField placeholder={I18n.t("registration.placeholder.password")} secureTextEntry={true}></TextField>
          <TextField placeholder={I18n.t("registration.placeholder.confirm_password")} secureTextEntry={true}></TextField>
          <ButtonAction text={I18n.t("registration.create")}></ButtonAction>
          <FacebookButton text={I18n.t("registration.sign_up_facebook")}></FacebookButton>
        </Container>
      </BackgroundImage>
    );
  }
}
