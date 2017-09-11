import React from "react";
import { TouchableOpacity, Text } from "react-native";
import ButtonAction from "./ButtonAction";
import Color from "./../config/Color";

const { facebookButtonBackground, facebookButtonText, facebookButtonBorder } = color;

export default function FacebookButtonAction (props) {
  return (
    <ButtonAction buttonStyle={styles.button} textStyle={styles.text} text={props.text} />
  );
}

const styles = {
  button: {
    backgroundColor: color.facebookButtonBackground,
    borderColor: color.facebookButtonBorder,
  }
}
