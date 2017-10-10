import React from "react";
import {View} from "react-native";

const Card = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      {props.children}
    </View>
  );
}

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: 15
  }
}

export {Card};
