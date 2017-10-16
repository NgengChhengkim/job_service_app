import React, {Component} from "react";
import {View} from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";

const SegmentControl = (props) => {
  return (
    <View style={styles.container}>
      <SegmentedControlTab
        values={props.values}
        selectedIndex={props.selectedIndex}
        onTabPress={props.onTabPress}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        tabsContainerStyle={styles.tabsContainerStyle}
        activeTabStyle={styles.activeTabStyle}
      />
    </View>
  );
}

const styles = {
  container: {
    marginTop: 10,
    marginBottom: 10
  },
  tabStyle: {
    borderColor: "#ff4081"
  },

  tabTextStyle: {
    color: "#ff4081",
    fontWeight: "bold",
    fontSize: 16
  },

  tabsContainerStyle: {
    backgroundColor: "rgba(0,0,0,0)",
    height: 40
  },

  activeTabStyle: {
    backgroundColor: "#ff4081"
  }
}

export {SegmentControl};
