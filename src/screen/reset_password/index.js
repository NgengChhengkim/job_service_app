import React, {Component} from "react";
import {connect} from "react-redux";
import {handleResetPassword} from "./../../actions/ResetPasswordActions";
import I18n from "./../../i18n/i18n";
import {
  BackgroundImage,
  Title,
  Container,
} from "./../../component";
import ResetPasswordForm from "./ResetPasswordForm";

class ResetPasswordScreen extends Component {
  render () {
    return (
      <Container loading={this.props.data.loading}>
        <ResetPasswordForm onSubmit={(values) => this.props.handleResetPassword(values)}/>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.resetPasswordData
  }
};

export default connect(mapStateToProps, {handleResetPassword})(ResetPasswordScreen);
