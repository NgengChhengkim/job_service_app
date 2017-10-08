import React from "react";
import { Text } from "react-native";
import Color from "./../config/Color";

const Label = (props) => {
  return (
    <Text style={[styles.label, props.labelStyle]} onPress={props.onPress}>{props.text}</Text>
  );
}

const styles = {
  label: {
    color: Color.label,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5
  }
}

export { Label };
