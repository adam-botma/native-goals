import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText){
    setEnteredGoal(enteredText);
  }

  function addGoalHandler () {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: enteredGoal}]);

  }

  return (
    <View style={styles.container}>
     <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title='Add' onPress={addGoalHandler}/>
     </View>
     <FlatList data={courseGoals} renderItem={itemData =>(
        <View style={styles.goalTextContainer}><Text style={styles.goalText} >{itemData.item.value}</Text></View>
     )}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,

  },

  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: 200,
  },

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  goalTextContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,

  },
  goalText: {



  }
});
