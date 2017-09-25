import React, {Component} from "react";
import { View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Color from "./../config/Color";

const { activeTab, transperent } = color;

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
    borderColor: color.activeTab
  },

  tabTextStyle: {
    color: color.activeTab,
    fontWeight: "bold",
    fontSize: 16
  },

  tabsContainerStyle: {
    backgroundColor: color.transperent,
    height: 40
  },

  activeTabStyle: {
    backgroundColor: color.activeTab
  }
}

export { SegmentControl };
