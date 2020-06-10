import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GoalInput(props) {
  return (
    <View>
      <Text style={listItemStyles.main}>
        {props.itemData.index}. {props.itemData.item}
      </Text>
    </View>
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
