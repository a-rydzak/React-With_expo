import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GoalInput(props) {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.itemData.index)}>
      <View>
        <Text style={listItemStyles.main}>
          {parseInt(props.itemData.index) + 1}. {props.itemData.item}
        </Text>
      </View>
    </TouchableOpacity>
  );


}
//-----------------------------Styles and CSS
const listItemStyles = StyleSheet.create({
  main: {
    margin: 10,
    textAlign: "left",
    borderColor: "black",
    borderWidth: 1,
  },
});
