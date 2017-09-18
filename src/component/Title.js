import React from "react";
import { View, Text } from "react-native";
import Color from "./../config/Color";

const { title } = color;
const Title = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = {
  container: {
    alignItems: "center"
  },

  title: {
    color: color.title,
    fontSize: 30,
    fontWeight: "bold"
  }
}

export { Title };
