import React from "react";
import { View, TextInput, Text } from "react-native";
import Color from "./../config/Color";

const { inputPlaceHolder, inputBorder, inputTextColor, errorMessage } = color;

const TextField = (props) => {
  return (
    <View>
      <TextInput
        style= {[styles.inputStyle, props.style]}
        placeholder={props.placeholder}
        placeholderTextColor={color.inputPlaceHolder}
        underlineColorAndroid={(props.errors == "") || (props.errors == undefined) ? color.inputUnderlineColor : color.errorMessage}
        secureTextEntry={props.secureTextEntry}
      />
      <Text style={styles.errorMessage}>{props.errors}</Text>
    </View>
  );
}

const styles = {
  inputStyle: {
    borderColor: color.inputBorder,
    height: 40,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    color: color.inputTextColor
  },

  errorMessage: {
    position: "absolute",
    bottom: -5,
    left: 5,
    color: color.errorMessage
  }
}

export { TextField };
