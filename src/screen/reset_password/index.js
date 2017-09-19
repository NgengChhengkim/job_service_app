import React, {Component} from "react";
import { View, Image } from "react-native";
import I18n from "./../../i18n/i18n";
import {
  BackgroundImage,
  Title,
  ButtonAction,
  TextField,
  Container,
} from "./../../component";

export default class ResetPassword extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container>
          <Title title={I18n.t("reset_password.title")} />
          <TextField placeholder={I18n.t("reset_password.placeholder.email")} />
          <ButtonAction text={I18n.t("reset_password.send_mail")} />
        </Container>
      </BackgroundImage>
    );
  }
}
