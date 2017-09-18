import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Color from "./../config/Color";

const { buttonBackground, buttonText, buttonBorder } = color;

const ButtonAction = (props) => {
  return (
    <TouchableOpacity style={[styles.button, props.buttonStyle]} onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    backgroundColor: color.buttonBackground,
    borderWidth: 1,
    borderColor: color.buttonBorder,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: color.buttonText
  }
}

export { ButtonAction };
