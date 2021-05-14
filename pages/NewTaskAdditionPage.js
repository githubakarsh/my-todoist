import React from "react";
import Select from "react-native-select-plus";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import _ from "lodash";

const NewTaskAdditionPage = ({
  description,
  onDescriptionChange,
  statusOptions,
  selectedValue,
  onSelectedValue,
  cancelAdding,
  onSaving,
}) => {
  return (
    <View style={styles.TaskContainer}>
      <Text style={styles.descriptionLabelTitle}>Enter description</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputMain}
          value={description}
          onChangeText={(text) => onDescriptionChange(text)}
        />
      </View>

      <View style={styles.selectContainer}>
        <Text style={styles.statusLabel}> Status </Text>
        <Select
            style={styles.selectComp}
          data={statusOptions}
          width={250}
          placeholder="Select a value ..."
          onSelect={(key, value) => onSelectedValue(key, value)}
        />
      </View>

      <Button
        onPress={() => cancelAdding()}
        color="#841584"
        title="Cancel"
        style={styles.cancelButton}
      />
      <Button
        onPress={() => onSaving()}
        title="Save New Item"
        disabled={!description || _.isEmpty(selectedValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    TaskContainer: {
        marginTop : 20,
    },
  inputContainer: {
    alignItems: "center",
  },

  selectContainer: {
    alignItems: "center",
  },

  statusLabel : {
    paddingBottom : 10,
  },

  selectComp : {
    borderRadius : 10,
  },

  textInputMain: {
    backgroundColor: "lightgray",
    width: 300,
    height: 32,
    borderRadius: 6,
    marginBottom: 6,
    marginTop: 6,
  },
  descriptionLabelTitle: {
    textAlign: "center",
  },
  cancelButton: {
    color: "black",
    backgroundColor: "lightgray",
  },
});

export default NewTaskAdditionPage;
