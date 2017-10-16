import React from "react";
import {View} from "react-native";

const Separator = (props) => {
  return (
    <View style={[styles.separator, props.style]}></View>
  );
}

const styles = {
  separator: {
    height: 1,
    backgroundColor: "#dddddd"
  }
}

export {Separator};
