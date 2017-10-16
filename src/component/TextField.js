import React from "react";
import {View, TextInput, Text} from "react-native";

const TextField = (props) => {
  const {input, meta, ...inputProps} = props;
  const invalidMessage = (meta.touched)
    ? meta.valid ? "" : meta.error
    : null;
  const invalidLineColor = (meta.touched)
    ? meta.valid ? "#dddddd" : "#ff4081"
    : "#dddddd";

  return (
    <View>
      <TextInput
        style= {[styles.inputStyle, props.style]}
        placeholder={props.placeholder}
        placeholderTextColor={"#9cacaa"}
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
    borderColor: "#dddddd",
    height: 40,
    borderRadius: 5,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    color: "#ffffff"
  },

  errorMessage: {
    position: "absolute",
    bottom: -5,
    left: 5,
    color: "#ff4081"
  }
}

export {TextField};
