import React from "react";
import {ScrollView} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

const Container = (props) => {
  return (
    <ScrollView keyboardShouldPersistTaps={"handled"} style={styles.container}>
      <Spinner visible={props.loading} />
      {props.children}
    </ScrollView>
  );
}

const styles = {
  container: {
    padding: 30
  }
}

export {Container};
