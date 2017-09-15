import React, {Component} from "react";
import { View } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Color from "./../config/Color";

const { activeTab, transperent } = color;

class SegmentControl extends Component {
  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlTab
          values={this.props.values}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          activeTabStyle={styles.activeTabStyle}
        />
      </View>
    );
  }
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
    fontWeight: "bold"
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
