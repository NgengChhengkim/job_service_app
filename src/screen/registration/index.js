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
  SegmentControl
} from "./../../component";

export default class RegistrationForm extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container>
          <Title title={I18n.t("registration.title")} />
          <TextField placeholder={I18n.t("registration.placeholder.name")} />
          <TextField placeholder={I18n.t("registration.placeholder.email")} />
          <TextField placeholder={I18n.t("registration.placeholder.password")} secureTextEntry={true} />
          <TextField placeholder={I18n.t("registration.placeholder.confirm_password")} secureTextEntry={true} />
          <SegmentControl values={
            [I18n.t("registration.tabs.job_seeker"), I18n.t("registration.tabs.recruiter")]
          } />
          <ButtonAction text={I18n.t("registration.create")} />
          <FacebookButton text={I18n.t("registration.sign_up_facebook")} />
        </Container>
      </BackgroundImage>
    );
  }
}
