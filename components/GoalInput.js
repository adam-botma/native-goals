import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet , Modal} from 'react-native';


const GoalInput = props => {

const [enteredGoal, setEnteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

return (
  <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoal} />
      <Button style={styles.addButton}title='Add' onPress={()=> props.addGoal(enteredGoal)} />
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


  addButton: {
    marginTop: 3 ,
  }


});

export default GoalInput;
