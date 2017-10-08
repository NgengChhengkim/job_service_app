import React, {Component} from "react";
import { View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Color from "./../config/Color";

const { activeTab, transperent } = Color;

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
    borderColor: activeTab
  },

  tabTextStyle: {
    color: activeTab,
    fontWeight: "bold",
    fontSize: 16
  },

  tabsContainerStyle: {
    backgroundColor: transperent,
    height: 40
  },

  activeTabStyle: {
    backgroundColor: activeTab
  }
}

export { SegmentControl };
