// flexbox is the highly suggested for react native here, it is the deafult
// for native
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import List from "./components/List";
export default function App() {

  // Data/Functionaly Used Const, othes below return statment
  const [outputText, setOutputText] = useState("See Lemur?");
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello There My Kitties!</Text>
      <Button
        onPress={changeOutputText}
        title={outputText}
        style={buttonStyles.container}
      />
      {/* This is using flex direction */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
      <View>
          {
            goals.map((goal)=><Text>{goal}</Text>)
          }
        </View>
    </View>
  );

  // Functions Getters and Setters
 function updateInputText(enteredInputText){
  setEnteredGoal(enteredInputText)
 }
 function addInputToList(){
    setGoals([...goals, enteredGoal ])
 }

  function changeOutputText() {
    let toUpdateText = outputText;
    toUpdateText == "Ok Lemur!!"
      ? (toUpdateText = "See Lemur?")
      : (toUpdateText = "Ok Lemur!!");
    setOutputText(toUpdateText);
  }
}

// Styles and CSS
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
