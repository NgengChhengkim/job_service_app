import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import RegistrationForm from "./screen/registration";

export default class App extends Component {
  render() {
    return (
      <RegistrationForm />
    );
  }
}

AppRegistry.registerComponent('jobServiceApp', () => App);
