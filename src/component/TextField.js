import React from "react";
import { TextInput } from "react-native";
import Color from "./../config/Color";

const { inputPlaceHolder, inputBorder, inputTextColor } = color;

const TextField = (props) => {
  return (
    <TextInput
      style={[styles.inputStyle, props.style]}
      placeholder={props.placeholder}
      placeholderTextColor={color.inputPlaceHolder}
      underlineColorAndroid={color.inputUnderlineColor}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

const styles = {
  inputStyle: {
    borderColor: color.inputBorder,
    height: 40,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
    color: color.inputTextColor
  }
}

export { TextField };
