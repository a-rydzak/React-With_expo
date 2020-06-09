import React, { useState } from "react";
import {
    View,
    Button,
  } from "react-native";

export default function GoalItem(props){
    const [goals, setGoals] = useState([]);
    const [enteredGoal, setEnteredGoal] = useState("");
    return(
     <View style={viewStyles.main}>
        {/* This is using flex direction */}
        <TextInput
        onChangeText={updateInputText}
        id="textInput"
        value={enteredGoal}
        style={textInputStyles.main}
        />
        <Button
        title="Add"
        color={color}
        onPress={addInputToList}
        style={{ color: "#ff5c5c", fontWeight: "bold", padding: 30 }}
        />
   </View>
    )

    function updateInputText(enteredInputText) {
        setEnteredGoal(enteredInputText);
      }
      function addInputToList() {
        const trimEdEnteredGoal = enteredGoal.trim();
        if (trimEdEnteredGoal !== null && trimEdEnteredGoal !== "") {
          setGoals([...goals, enteredGoal]);
        }
      }
}
