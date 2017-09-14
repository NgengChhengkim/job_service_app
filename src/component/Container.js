import React from "react";
import { View } from "react-native";

const Container = (props) => {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = {
  container: {
    padding: 30
  }
}

export { Container };
