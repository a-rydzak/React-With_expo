import React from "react";
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
        <Button title="Add" color={"blue"} onPress={props.addInputToList} />
        <Button
          title="Cancel"
          color={color}
          onPress={setModalViewFalse}
          //---Apparently these 2 methods cause unecessary re-rendering
          // onPress={()=>props.setModalGoalsShown(false)}
          //---Whenever you use .bind() it’ll return a new function which will be bound to the object that we pass to the .bind.
          // onPress={props.setModalGoalsShown.bind(this, false)}
          //---Which means every time the Parent component re-renders the handler for the Child component will be a new function.
        />
      </View>
    </Modal>
  );
  //--------------------------Helper Functions That Live In The Component
  function setModalViewFalse() {
    props.setModalGoalsShown(false);
  }
  function updateInputText(enteredInputText) {
    props.setEnteredGoal(enteredInputText);
  }
}
//-----------------------------Styles and CSS
const viewStyles = StyleSheet.create({
  main: { justifyContent: "center", alignItems: "center", flex: 1 },
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
