import React from "react";
import {Text} from "react-native";

const Label = (props) => {
  return (
    <Text style={[styles.label, props.style]} onPress={props.onPress}>{props.text}</Text>
  );
}

const styles = {
  label: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5
  }
}

export {Label};
