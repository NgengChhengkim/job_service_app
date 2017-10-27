import React from "react";
import {Image} from "react-native";

const BackgroundImage = (props) => {
  return (
    <Image source={require("./../images/background.png")} style={[styles.backgroundImage, props.style]}>
      {props.children}
    </Image>
  );
}

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center"
  }
}

export {BackgroundImage};
