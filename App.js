import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {


  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false)


  function addGoalHandler (goalText) {
    setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(), value: goalText}]);

  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId);
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Add new Goal" onPress={()=> setAddMode(true)}/>
     <GoalInput visible={isAddMode} addGoal={addGoalHandler} />
     <FlatList data={courseGoals} renderItem={itemData =>(
        <GoalItem goalText={itemData.item.value} onDelete={removeGoalHandler.bind(this, itemData.item.key)}/>
    )}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,

  },
});
