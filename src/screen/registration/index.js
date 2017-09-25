import React, {Component} from "react";
import { View, Image, Text} from "react-native";
import {connect} from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import I18n from "./../../i18n/i18n";
import {handleRegistration} from "./../../actions/SignUpActions";
import {
  BackgroundImage,
  Title,
  Container,
} from "./../../component";

import RegistrationForm from "./RegistrationForm";

class RegistrationScreen extends Component {
  overlayLoading() {
    if(this.props.data.loading) {
      return(
        <Spinner visible={this.props.data.loading} />
      )
    }
  }

  render () {
    return (
      <BackgroundImage>
        <Container>
          <Title title={I18n.t("registration.title")}></Title>
          <RegistrationForm onSubmit={(values) => this.props.handleRegistration(values)}/>
          {this.overlayLoading()}
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.signUpData
  }
};

const actions = {handleRegistration};
export default connect(mapStateToProps, actions)(RegistrationScreen);
