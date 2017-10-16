import React from "react";
import {View, Text} from "react-native";

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
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold"
  }
}

export {Title};
