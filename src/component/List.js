import React from "react";
import {FlatList, ActivityIndicator} from "react-native";

const List = (props) => {
  return (
    <FlatList style={props.style}
      data={props.data}
      renderItem={({item}) => props.renderItem(item)}
      onRefresh={props.onRefresh}
      refreshing={false}
      onEndReached={props.onEndReached}
      onEndReachedThreshold={0.3}
      keyExtractor={(item, index) => item.id}
      ListFooterComponent={() => props.loadingMore ? <ActivityIndicator animating = {true} size = "small" /> : null}
      onMomentumScrollBegin={props.onMomentumScrollBegin}
    />
  );
}

export {List};
