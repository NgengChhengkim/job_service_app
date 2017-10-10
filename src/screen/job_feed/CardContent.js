import React from "react";
import {
  Card,
  CardHeader,
  CardAction
} from "./../../component";
import {View, Text} from "react-native";

export default CardContent = (props) => {
  return (
    <Card style={styles.card}>
      <CardHeader image={props.image}
        name={props.name}
        postDate={props.postDate}
      />
      <View style={styles.content}>
        <Text style={styles.jobTitle}>{props.title}</Text>
        <Text style={styles.smallLabel}>{props.location}</Text>
        <Text style={styles.smallLabel}>Salary: {props.salary}</Text>
        <Text style={styles.smallLabel}>Closing date: {props.closing_date}</Text>
      </View>
      <CardAction />
    </Card>
  );
}

const styles = {
  card: {
    marginBottom: 10
  },
  content: {
  },
  jobTitle: {
    fontWeight: "700",
    fontSize: 15
  },
  smallLabel: {
    lineHeight: 20
  }
}
