import React, { useState } from "react";
import { TODOS } from "../utils/data";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
} from "react-native";

export default function AllScreen({ navigation }) {
  const [todoList, setTodoList] = useState(TODOS);
  const [todoBody, setTodoBody] = useState("");

  const onToggleTodo = (id) => {
    const todo = todoList.find((todo) => todo.id === id);
    todo.status = todo.status === "Done" ? "Active" : "Done";
    const foundIndex = todoList.findIndex((todo) => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    setTimeout(() => {
      navigation.navigate("Detail", todo);
    }, 1000);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  const onSubmitTodo = () => {
    const newTodo = {
      body: todoBody,
      status: "Active",
      id: todoList.length + 1,
    };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
    setTodoBody("");
  };

  const TodoItem = (props) => {
    const statusStyle = {
      backgroundColor: props.todo.status === "Done" ? "blue" : "green",
    };

    const onLongPress = (todo) => {
      const prompt = `"${todo.body}"`;
      Alert.alert(
        "Delete your todo?",
        prompt,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => props.onDeleteTodo(todo.id) },
        ],
        { cancelable: true }
      );
    };

    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, statusStyle]}
        onLongPress={() => onLongPress(props.todo)}
        onPress={() => {
          props.onToggleTodo(props.todo.id);
        }}
      >
        <Text style={styles.todoText}>
          {props.index + 1}: {props.todo.body}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {todoList.map((todo, index) => (
        <TodoItem
          key={todo.body}
          todo={todo}
          index={index}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodoBody(text)}
          placeholder="Something todo ..."
          value={todoBody}
          style={styles.todoInput}
        ></TextInput>
        <TouchableOpacity style={styles.btnSubmit} onPress={onSubmitTodo}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: "95%",
    minHeight: 20,
    color: "white",
    borderRadius: 5,
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    marginBottom: "10%",
    marginTop: "5%",
  },
  todoInput: {
    width: "95%",
    minHeight: 30,
    color: "black",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 15,
    fontSize: 20,
  },
  btnSubmit: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "blue",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
