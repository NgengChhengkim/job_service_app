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

export default class Session extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container>
          <Title title={I18n.t("sign_in.title")} />
          <TextField placeholder={I18n.t("sign_in.placeholder.email")} />
          <TextField placeholder={I18n.t("sign_in.placeholder.password")} secureTextEntry={true} />
          <ButtonAction text={I18n.t("sign_in.login")} />
          <FacebookButton text={I18n.t("sign_in.login_with_facebook")} />
          <View style={styles.labelContainer}>
            <Label text={I18n.t("sign_in.create_new_account")} />
            <Label text={I18n.t("sign_in.forget_password")} labelStyle={styles.forgetPassword} />
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
