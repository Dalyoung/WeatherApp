import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  const [zip, setZip] = useState("");
  const handleTextChange = event => {
    setZip({zip: event.target.value});
    console.log('!!');
  }

  return (
    <View style={styles.container}>
      <Text>Open up WeatherProject.js to start working on your app!</Text>
      <Text style={styles.welcome}>You input {zip}</Text>
      <TextInput style={styles.input} onChange={handleTextChange}/>
      <StatusBar style="auto" />
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
  welcome: {fontSize: 20},
  input: {fontSize: 20, borderWidth: 2, height: 40},
});
