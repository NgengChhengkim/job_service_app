import React from "react";
import {View} from "react-native";
import {LoadingModal} from "./";

const AppContainer = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <LoadingModal visible={props.loading} />
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
