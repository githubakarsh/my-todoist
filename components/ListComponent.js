import React from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import Divider from './Divider';
import Select from 'react-native-select-plus';

const statusStyles = (status) => ({
    'To do' : styles.statusTodo,
    'In progress' : styles.statusProgress,
    'Done' : styles.statusDone
})[status]

//status option
const statusOptions = [
    {key: "todo", label : "To do"},
    {key: "progress", label: "In Progress"},
    {key: "done", label: "Done"},
    {key: "delete", label: 'Delete'}
  ];

const ListComponent = ({ listItems, onStatusChange }) => {
 return <View style={styles.container}>
     {listItems?.map(({id, description, status}) => {
            return <View>
                <Text style={styles.listItem} 
                key={id}>
                    {description} - status - <Text style={statusStyles(status)}>{status}</Text>
            </Text>
            <Select data={statusOptions} placeholder="Select a value ..."
                    onSelect={(key, value) => onStatusChange({key, value, id})}/>
            </View>;
     })}
 </View>
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderLeftColor : 'red',
    },
    listItem : {
        paddingBottom : 15,
    },
    item : {
        borderStyle : 'solid',
        borderLeftWidth : 4,
        borderColor : 'red'
    },
    statusTodo : {
        color : 'blue'
    },
    statusProgress : {
        color : 'yellow',
    },
    statusDone : {
        color : 'green'
    }
});

export default ListComponent;
