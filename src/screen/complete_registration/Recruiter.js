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

const a = [{id: 1, name: "a"}, {id: 2, name: "b"}, {id: 3, name: "c"}]

class Recruiter extends Component {
  render () {
    return (
      <BackgroundImage>
        <Container loading={this.props.data.loading}>
          <Title title={I18n.t("complete_registration.recruiter.title")} />
          <CompleteRegistrationRecruiterForm jobTypeData={a} locationData={a} navigator={this.props.navigator} onSubmit={(values) => this.props.handleCompleteRegistrationRecruiter(values, this.props.navigator)}/>
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
