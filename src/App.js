import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import RegistrationForm from "./screen/registration";

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RegistrationForm />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('jobServiceApp', () => App);
