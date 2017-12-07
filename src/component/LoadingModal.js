import React from "react";
import {View, FlatList, Modal, ActivityIndicator} from "react-native";

const LoadingModal = (props) => {
  return (
    <Modal
      animationType={"none"}
      transparent={true}
      visible={props.visible}>
      <View style={styles.modal}>
        <ActivityIndicator
          style={styles.spinner}
          animating={true}
          size={"large"}
          color={"white"} />
      </View>
    </Modal>
  );
}

const styles = {
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: {
    height: 100,
    width: 100,
    backgroundColor: "#3434347f",
    borderRadius: 10
  }
}
export {LoadingModal};
