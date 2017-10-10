import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const IconActionButton = (props) => {
  return (
    <Icon.Button name={props.name}
      backgroundColor="transparent"
      color="#999999"
      size={16}
      iconStyle={{marginRight: 5}}
      style={[styles.actionButton, props.style]}>
      {props.text}
    </Icon.Button>
  );
}

const styles = {
  actionButton: {
    padding: 0,
    paddingTop: 10
  }
}

export {IconActionButton};
