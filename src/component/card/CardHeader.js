import React from "react";
import {View, Text, Image} from "react-native";

const CardHeader = (props) => {
  let image = props.image === null ? require("./../../images/default_avatar.png") : require(props.image);
  return (
    <View style={[styles.header, props.style]}>
      <Image source={image}
        style={styles.avatar}/>
      <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.date}>{props.postDate}</Text>
      </View>
    </View>
  );
}

const styles = {
  header: {
    flex: 1,
    flexDirection: "row"
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  name: {
    fontWeight: "700",
    marginBottom: 3,
    fontSize: 15
  },
  date: {
    fontSize: 10
  },
}

export {CardHeader};
