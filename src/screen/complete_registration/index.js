import React, {Component} from "react";
import {connect} from "react-redux";
import I18n from "./../../i18n/i18n";
import {
  BackgroundImage,
  Title,
  Container,
} from "./../../component";
import CompleteRegistrationForm from "./CompleteRegistrationForm";
import {handleCompleteRegistration} from "./../../actions/CompleteRegistrationActions";

const a = [{id: 1, name: "a"}, {id: 2, name: "b"}, {id: 3, name: "c"}]

class CompleteRegistration extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container loading={this.props.data.loading}>
          <Title title={I18n.t("complete_registration.title")} />
          <CompleteRegistrationForm user_type={this.props.user_type} jobTypeData={a} locationData={a} navigator={this.props.navigator} onSubmit={(values) => this.props.handleCompleteRegistration(values, this.props.navigator)}/>
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.completeRegistrationData
  }
};

export default connect(mapStateToProps, {handleCompleteRegistration})(CompleteRegistration);
