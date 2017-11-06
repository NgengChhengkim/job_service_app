import React, {Component} from "react";
import I18n from "./../../i18n/i18n";
import {View, Text, FlatList, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Color from "./../../config/Color";
import {closeModal} from "./../../lib/HandleScreen";
import {Separator} from "./../../component";

export default class ModalPicker extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));

    this.state = {
      selectedItems: props.input.value
    };

    this.setNavbarTitle(this.state.selectedItems);
  }

  static navigatorButtons = {
    rightButtons: [
      {
        title: I18n.t("actions.done"),
        id: "done"
      }
    ],
    leftButtons: [
      {
        title: I18n.t("actions.cancel"),
        id: "cancel"
      }
    ]
  };

  setNavbarTitle(value) {
    let title;
    if(this.props.singleSelect) {
      if(Object.keys(value).length == 0) {
        title = I18n.t("labels.please_select");
      } else {
        title = value.name;
      }
    } else {
      title = `${value.length} ${I18n.t("labels.selected")}`;
    }
    this.props.navigator.setTitle({
      title: title
    });
  }

  removeItem(items, item) {
    return items.filter(e => e.id !== item.id);
  }

  displayIcon(item) {
    if((this.props.singleSelect && this.state.selectedItems.id == item.id) ||
      (!this.props.singleSelect && this.state.selectedItems.some(element => element.id == item.id))) {
      return(
        <Icon name="check" size={30} color={Color.buttonBackground} size={12} style={styles.icon}/>
      )
    } else {
      return null;
    }
  }

  onItemSelect(item) {
    let selectedItems;

    if(this.props.singleSelect) {
      if(this.state.selectedItems.id == item.id) {
        selectedItems = [];
      } else {
        selectedItems = item;
      }
    } else {
      selectedItems = this.state.selectedItems;
      let exist = selectedItems.some(element => element.id == item.id);
      let index = selectedItems.indexOf(item);
      if(exist) {
        selectedItems = this.removeItem(selectedItems, item);
      } else {
        selectedItems = [...selectedItems, item];
      }
    }

    this.setState({selectedItems: selectedItems});
    this.setNavbarTitle(selectedItems);
  }

  renderItem(item) {
    return(
      <TouchableOpacity onPress={() => this.onItemSelect(item)}>
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
          {this.displayIcon(item)}
        </View>
      </TouchableOpacity>
    )
  }

  onNavigatorEvent(event) {
    if (event.id == "cancel") {
      closeModal(this.props.navigator);
    }
    if (event.id == "done") {
      this.props.input.onChange(this.state.selectedItems);
      closeModal(this.props.navigator);
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => this.renderItem(item)}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
          extraData={this.state.selectedItems}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5
  }
}
