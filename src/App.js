import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import TextField from "./component/TextField";
import ButtonAction from "./component/ButtonAction";
import FacebookButton from "./component/FacebookButton";
import Title from "./component/Title";


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextField placeholder="name" />
        <ButtonAction text="sign in" />
        <FacebookButton text="sign in" />
        <Title title="Sign up"></Title>
      </View>

    );
  }
}

const styles = {
  container: {
    padding: 10,
    flex: 1
  }
}

AppRegistry.registerComponent('jobServiceApp', () => App);
