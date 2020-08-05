import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete}>
    <View style={styles.goalTextContainer}>
      <Text style={styles.goalText} >{props.goalText}</Text>
    </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({

  goalTextContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,

  },
  goalText: {



  }
})

export default GoalItem;
