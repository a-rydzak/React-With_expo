// flexbox is the highly suggested for react native here, it is the deafult
// for native
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
} from "react-native";
import GoalList from './components/GoalList';
import GoalInput from './components/GoalInput'
export default function App() {
  // Data/Functionaly Used Const, Functions and CSS After Return
  const [outputText, setOutputText] = useState("See Lemur?");
  
  

  return (
    <View style={styles.container}>
      <Button
        onPress={changeOutputText}
        title={outputText}
        style={buttonStyles.container}
      />
      <GoalInput/>
      <GoalList goals={goals}/>
    </View>
  );
  //-----------------------------Functions Getters and Setters

  function changeOutputText() {
    let toUpdateText = outputText;
    toUpdateText == "Ok Lemur!!"
      ? (toUpdateText = "See Lemur?")
      : (toUpdateText = "Ok Lemur!!");
    setOutputText(toUpdateText);
  }
}
//-----------------------------Styles and CSS
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
const viewStyles = StyleSheet.create({
  main: { flexDirection: "row", justifyContent: "center" },
  topDown: { flexDirection: "column", justifyContent: "center", width: "100%" },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
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