import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

export default function GoalInput(props) {

  return (
    <View style={viewStyles.main}>
      {/* This is using flex direction */}
      <TextInput
        onChangeText={updateInputText}
        id="textInput"
        value={props.enteredGoal}
        style={textInputStyles.main}
      />
      <Button
        title="Add"
        color={color}
        onPress={props.addInputToList}
        style={{ color: "#ff5c5c", fontWeight: "bold", padding: 30 }}
      />
    </View>
  );

  function updateInputText(enteredInputText) {
    props.setEnteredGoal(enteredInputText);
  }
}
//-----------------------------Styles and CSS
const viewStyles = StyleSheet.create({
  main: { flexDirection: "row", justifyContent: "center" },
  topDown: { flexDirection: "column", justifyContent: "center", width: "100%" },
});
const color = "#ff5c5c";
const textInputStyles = StyleSheet.create({
  main: {
    height: 40,
    width: 200,
    borderBottomWidth: 1.0,
    borderBottomColor: "gray",
    borderWidth: 1,
  },
});
