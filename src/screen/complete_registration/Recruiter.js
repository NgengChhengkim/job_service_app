import React, {Component} from "react";
import {connect} from "react-redux";
import I18n from "./../../i18n/i18n";
import {
  BackgroundImage,
  Title,
  Container,
} from "./../../component";
import CompleteRegistrationRecruiterForm from "./CompleteRegistrationRecruiterForm";
import {handleCompleteRegistrationRecruiter} from "./../../actions/CompleteRegistrationRecruiterActions";

class Recruiter extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container loading={this.props.data.loading}>
          <Title title={I18n.t("complete_registration.recruiter.title")} />
          <CompleteRegistrationRecruiterForm onSubmit={(values) => this.props.handleCompleteRegistrationRecruiter(values, this.props.navigator)}/>
        </Container>
      </BackgroundImage>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.completeRegistrationRecruiterData
  }
};

export default connect(mapStateToProps, {handleCompleteRegistrationRecruiter})(Recruiter);
