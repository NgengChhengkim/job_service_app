import React, {Component} from "react";
import {connect} from "react-redux";
import I18n from "./../../i18n/i18n";

import {
  Title,
  Container,
  Label
} from "./../../component";


class JobFeedScreen extends Component {
  render () {
    return (
      <Container>
        <Title title="Job feed"></Title>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: {}
  }
};

const actions = {};
export default connect(mapStateToProps, actions)(JobFeedScreen);
