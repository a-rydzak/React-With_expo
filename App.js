// flexbox is the highly suggested for react native here, it is the deafult
// for native
import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
  // Data/Functionaly Getters/Setters
  const [outputText, setOutputText] = useState("See Lemur?");
  const [modalGoalsShown, setModalGoalsShown] = useState(false);
  const [goals, setGoals] = useState([]);
  const [enteredGoal, setEnteredGoal] = useState("");

  const addInputToList = () => {
    const trimEdEnteredGoal = enteredGoal.trim();
    if (trimEdEnteredGoal !== null && trimEdEnteredGoal !== "") {
      setGoals([...goals, enteredGoal]);
      setEnteredGoal("");
      setModalGoalsShown(false)
    }
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={changeOutputText}
        title={outputText}
      />
      <GoalInput
        modalGoalsShown={modalGoalsShown}
        addInputToList={addInputToList}
        enteredGoal={enteredGoal}
        setEnteredGoal={setEnteredGoal}
      />
      <GoalList goals={goals} setGoals={setGoals} onDelete={onDelete}/>
    </View>
  );
  //--------------------------Helper Functions
  function changeOutputText() {
    let toShowModel = modalGoalsShown
    let toUpdateText = outputText;
    toUpdateText == "Ok Lemur!!"
      ? (toUpdateText = "See Lemur?")
      : (toUpdateText = "Ok Lemur!!");
    
    toShowModel === false
      ? (toShowModel = true)
      : (toShowModel = false);

    setModalGoalsShown(toShowModel)
    setOutputText(toUpdateText);
  }
  function onDelete(goalId){
    setGoals(goals =>{
      return goals.filter((goal,index)=> index !== goalId)
    });
  }
}
//-----------------------------Styles and CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:200,
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
//-----------------------------End

//--------------------Scrollview vs Flatlist
//{/*ScrollView Not great for a list of unknown length */}
//  Renders all elements in advance ahead of need and can reduce initial load time
// <ScrollView
//   contentContainerStyle={[viewStyles.topDown, { marginVertical: 20 }]}
// >
//   {goals.map((goal) => {
//     listItemCount += 1;
//     return (
//       <View key={listItemCount}>
//         <Text style={listItemStyles.main}>
//           {listItemCount}. {goal}
//         </Text>
//       </View>
//     );
//   })}
// </ScrollView>
