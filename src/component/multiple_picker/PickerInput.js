import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import I18n from "./../../i18n/i18n";
import {openModal} from "./../../lib/HandleScreen";
import Icon from "react-native-vector-icons/FontAwesome";

class PickerInput extends Component {
  constructor(props) {
    super(props);
  }

  renderItemRow(item) {
    return (
      <Text key={item.id} style={styles.item}>{item.name}</Text>
    );
  }

  renderSelectedItems(items) {
    if(this.props.singleSelect && Object.keys(items).length > 0) {
      return this.renderItemRow(items);
    } else if(items.length > 0) {
      return items.map((item, key) => {
        return this.renderItemRow(item);
      })
    } else {
      return(
        <Text style={styles.text}>{I18n.t("labels.please_select")}</Text>
      )
    }
  }

  invalidMessage(meta) {
    if(meta.touched && !meta.valid) {
      return meta.error;
    }
  }

  invalidLineColor(meta) {
    if(meta.touched && !meta.valid) {
      return "#ff4081";
    } else {
      return "#dddddd";
    }
  }

  render() {
    const {input, meta, ...inputProps} = this.props;
    input.value = input.value || [];

    return (
      <TouchableOpacity onPress={() => openModal(this.props.navigator, "multiple_picker.screen", {input: input, data: this.props.data, singleSelect: this.props.singleSelect})}>
        <View style={[styles.container, {borderBottomColor: this.invalidLineColor(meta)}]}>
          <View style={styles.itemContainer}>{this.renderSelectedItems(input.value)}</View>
          <View style={styles.icon}>
            <Icon name="chevron-right" size={12} color="#dddddd"/>
          </View>
        </View>
        <Text style={styles.errorMessage}>{this.invalidMessage(meta)}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    minHeight: 30
  },
  itemContainer: {
    flex: 0.95,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 2,
    backgroundColor: "#ff4081",
    color: "#ffffff",
    borderRadius: 5
  },
  icon: {
    flex: 0.05,
    justifyContent: "center"
  },
  errorMessage: {
    left: 5,
    color: "#ff4081"
  },
  text: {
    color: "#9cacaa",
    fontSize: 16
  }
}

export {PickerInput};
