import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

export default function GoalInput(props) {

  return (

    <Modal visible={props.modalGoalsShown}>
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
        />
      </View>
    </Modal>
  );
  //--------------------------Helper Functions
  function updateInputText(enteredInputText) {
    props.setEnteredGoal(enteredInputText);
  }
}
//-----------------------------Styles and CSS
const viewStyles = StyleSheet.create({
  main:  {justifyContent: "center", alignItems:'center', flex:1},
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
