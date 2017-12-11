import React from "react";
import {TouchableOpacity, Text} from "react-native";

const ButtonAction = (props) => {
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    backgroundColor: "#ff4081",
    borderWidth: 1,
    borderColor: "#ff4081",
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
    color: "#ffffff"
  }
}

export {ButtonAction};
