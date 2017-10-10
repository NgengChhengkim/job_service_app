import React from "react";
import {View} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const AppContainer = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <Spinner visible={props.loading} />
      {props.children}
    </View>
  );
}

const styles = {
  container: {
    padding: 10,
    backgroundColor: "#e3e4e1"
  }
}

export {AppContainer};
