
// libraries
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import _ from 'lodash';

// user defined components and pages
import ListComponent from './components/ListComponent';
import Divider from './components/Divider';
import NewTaskAdditionPage from './pages/NewTaskAdditionPage';

// default todo list
const todoList = [
  {id: '1', description : 'Learn Typescript', status: 'To do'},
  {id: '2', description : 'Learn React native app', status: 'In progress'},
  {id: '3', description : 'Learn React, Redux', status: 'Done'},
  {id: '4', description : 'Learn HTML', status: 'To do'},
  {id: '5', description : 'Learn CSS', status: 'In progress'},
  {id: '6', description : 'Learn Javascript', status: 'Done'},
];

//status option
const statusOptions = [
  {key: "todo", label : "To do"},
  {key: "progress", label: "In Progress"},
  {key: "done", label: "Done"}
];

export default function App() {
  const [viewState, setViewState ] = useState(todoList);
  const [isButtonclicked, setButtonClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [description, setDescription] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [statusChangeValue, setStatusChangeValue] = useState('');

  const onNewPress = () => {
    setButtonClicked(!isButtonclicked);
  }

  const onDescriptionChange = (text) => {
    setDescription(text);
  }

  const onSelectedValue = (key, value) => {
    setSelectedValue({key, value});
  }

  const onSaving = () => {
    const newArray = viewState;
    newArray.push({id: Math.floor(Math.random() * 300 + 200), description: description, status: selectedValue.value })
    setViewState(newArray);
    setButtonClicked(false);

    // remove if any value exists ..... 
    setDescription('');
    setSelectedValue({});
  }


  const onStatusChange = ({key, value, id}) => {
    const newArray = viewState;
    const array2 = ['To do', 'In progress', 'Done']
  }


  const cancelAdding = () => {
    setButtonClicked(false);
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add new task</Text>
      {!isButtonclicked && <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.addTaskButton} 
          onPress={() => onNewPress()}>
            <Text>Add New Item</Text>
            </TouchableOpacity> 
        </View>}
      <Divider />

    
      {isButtonclicked && <NewTaskAdditionPage 
        description={description}
        onDescriptionChange={onDescriptionChange}
        statusOptions={statusOptions}
        onSelectedValue={onSelectedValue}
        cancelAdding={cancelAdding}
        onSaving={onSaving}
        selectedValue={selectedValue}
      />}
     
      { isLoading
        ? <Text>Loading ..... </Text>
        :<Text>{!isButtonclicked && <ListComponent listItems={viewState} onStatusChange={onStatusChange}/>}</Text>}
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header : {
    textAlign : 'center',
    fontSize : 25,
    paddingBottom : 10,
  },
  container: {
    top: 70,
  },
  textInputMain : {
    backgroundColor: 'lightgray',
    width: 300,
    height: 32,
    borderRadius: 6,
    marginBottom : 6,
    marginTop : 6,
  },

  addTaskButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    width : 180,
    padding: 10,
    borderRadius : 8,
    color : 'white',
  },

  buttonContainer : {
    textAlign : 'center',
    alignItems : 'center',
    marginTop : 15,
    paddingBottom : 12
  }
});
