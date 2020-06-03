import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('See Lemur!')

  const changeOutputText = () =>{
    let toUpdateText = outputText;

    toUpdateText == 'Ok Lemur!!'? toUpdateText = 'See Lemur': toUpdateText = 'Ok Lemur!!'
    setOutputText(toUpdateText)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello There My Kitties!</Text>
      <Button onPress={()=>changeOutputText()} title={outputText} style={buttonStyles.container}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
