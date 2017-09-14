import React from "react";
import { View, Text } from "react-native";
import Color from "./../config/Color";

const { title } = color;
export default function (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = {
  title: {
    color: color.title,
    fontSize: 20,
    fontWeight: "bold"
  }
}
