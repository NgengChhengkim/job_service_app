import React from "react";
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  IconActionButton
} from "./../../component";
import I18n from "./../../i18n/i18n";

const CardAction = (props) => {
  return (
    <View style={styles.actions}>
      <IconActionButton name="heart" text={I18n.t("actions.add_to_favorite")} />
      <IconActionButton name="send" text={I18n.t("actions.apply")} />
    </View>
  );
}

const styles = {
  actions: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 0.3,
    borderTopColor: "#dddddd",
    marginTop: 10,
    justifyContent: "space-between"
  }
}

export {CardAction};
