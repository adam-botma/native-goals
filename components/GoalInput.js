import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Modal} from 'react-native';


const GoalInput = props => {

const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

 const addGoalHandler = () => {
   props.onAddGoal(enteredGoal);
   setEnteredGoal('');
 }


return (
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
      <View style={styles.buttonContainer}>
        <Button style={styles.cancelButton} color='red' title="Cancel" onPress={props.onCancel}/>
        <Button style={styles.addButton}title='Add' onPress={()=> props.addGoal(enteredGoal)} />
      </View>
    </View>
  </Modal>
)};

const styles = StyleSheet.create({

  textInput: {
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    width: 200,
  },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%'

  },

  addButton: {
    marginTop: 3,
  }


});

export default GoalInput;
