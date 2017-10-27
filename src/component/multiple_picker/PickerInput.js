import React, {Component} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import Color from "./../../config/Color";
import I18n from "./../../i18n/i18n";
import {openModal} from "./../../lib/HandleScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const {inputPlaceHolder, inputBorder, inputUnderlineColor, errorMessage, buttonBackground, inputTextColor} = Color;

class PickerInput extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectedItems(items) {
    if(items.length > 0) {
      return items.map((item, key) => {
        return (
          <Text key={item.id} style={styles.item}>{item.name}</Text>
        );
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
      return errorMessage;
    } else {
      return inputUnderlineColor;
    }
  }

  render() {
    const {input, meta, ...inputProps} = this.props;
    return (
      <TouchableOpacity onPress={() => openModal(this.props.navigator, "multiple_picker.screen", {input: input, data: this.props.data})}>
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
    borderBottomColor: inputBorder,
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
    backgroundColor: buttonBackground,
    color: inputTextColor,
    borderRadius: 5
  },
  icon: {
    flex: 0.05,
    justifyContent: "center"
  },
  errorMessage: {
    left: 5,
    color: errorMessage
  },
  text: {
    color: inputPlaceHolder,
    fontSize: 16
  }
}

export {PickerInput};
