import React, {Component} from "react";
import { View } from "react-native";
import I18n from "./../../i18n/i18n";
import EmailLoginForm from "./EmailLoginForm";
import {handleLogin} from "./../../actions/LoginActions";
import {connect} from "react-redux";

import {
  BackgroundImage,
  Title,
  ButtonAction,
  FacebookButton,
  TextField,
  Container,
  Label
} from "./../../component";

class Session extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container loading={this.props.data.loading}>
          <Title title={I18n.t("sign_in.title")} />
          <EmailLoginForm onSubmit={(values) => this.props.handleLogin(values)}/>
          <View style={styles.labelContainer}>
            <Label text={I18n.t("sign_in.create_new_account")} />
            <Label text={I18n.t("sign_in.forget_password")} labelStyle={styles.forgetPassword} />
          </View>
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.loginData
  }
};

const actions = {handleLogin};
export default connect(mapStateToProps, actions)(Session);

const styles = {
  forgetPassword: {
    position: "absolute",
    right: 0
  }
}
