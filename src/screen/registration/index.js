import React, {Component} from "react";
import {connect} from "react-redux";
import I18n from "./../../i18n/i18n";
import {handleRegistration} from "./../../actions/SignUpActions";
import {
  BackgroundImage,
  Title,
  Container,
} from "./../../component";

import RegistrationForm from "./RegistrationForm";

class RegistrationScreen extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container loading={this.props.data.loading}>
          <Title title={I18n.t("registration.title")}></Title>
          <RegistrationForm onSubmit={(values) => this.props.handleRegistration(values)}/>
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
