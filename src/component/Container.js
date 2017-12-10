import React from "react";
import { ScrollView } from "react-native";
import {LoadingModal} from "./";

const Container = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={styles.container}>
      <LoadingModal visible={props.loading} />
      {props.children}
    </ScrollView>
  );
}

const styles = {
  container: {
    padding: 30,
    backgroundColor: "#013851"
  }
}

export { Container };
