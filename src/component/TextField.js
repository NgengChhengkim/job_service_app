import React from "react";
import { View, TextInput, Text } from "react-native";
import Color from "./../config/Color";

const { inputPlaceHolder, inputBorder, inputTextColor, errorMessage } = color;

const TextField = (props) => {
  const {input, meta, ...inputProps} = props;
  const invalidMessage = (meta.touched)
    ? meta.valid ? "" : meta.error
    : null;
  const invalidLineColor = (meta.touched)
    ? meta.valid ? color.inputUnderlineColor : color.errorMessage
    : color.inputUnderlineColor;

  return (
    <View>
      <TextInput
        style= {[styles.inputStyle, props.style]}
        placeholder={props.placeholder}
        placeholderTextColor={color.inputPlaceHolder}
        underlineColorAndroid={invalidLineColor}
        secureTextEntry={props.secureTextEntry}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      <Text style={styles.errorMessage}>{invalidMessage}</Text>
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
