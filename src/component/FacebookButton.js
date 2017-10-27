import React from "react";
import {TouchableOpacity, Text} from "react-native";
import {ButtonAction} from ".";

const FacebookButton = (props) => {
  return (
    <ButtonAction style={styles.button} textStyle={styles.text} text={props.text} />
  );
}

const styles = {
  button: {
    backgroundColor: "#0085ff",
    borderColor: "#0085ff",
  }
}

export {FacebookButton};
