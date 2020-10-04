import React, { useState } from "react";
import { Platform } from "react-native";
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
  ImageBackground,
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
      navigation.navigate("Detail", todoList[foundIndex]);
    }, 500);
  };

  const onDeleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    newTodoList.map((todo, index) => (todo.id = index + 1));
    setTodoList(newTodoList);
  };

  function trim(str) {
    return str.replace(/^\s+|\s+$/gm, "");
  }

  const onSubmitTodo = () => {
    let inputValue = trim(todoBody);
    if (!inputValue) Alert.alert("Your input is invalid!");
    else {
      const newTodo = {
        body: inputValue,
        status: "Active",
        id: todoList.length + 1,
      };
      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
      setTodoBody("");
    }
  };

  const TodoItem = (props) => {
    const statusStyle = {
      backgroundColor: props.todo.status === "Done" ? "#76B041" : "#E4572E",
    };

    const onLongPress = (todo) => {
      const prompt = `"${todo.body}"`;
      Alert.alert(
        "Delete your todo?",
        prompt,
        [
          {
            text: "Cancel",
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
        style={[styles.todoItem, statusStyle, styles.shadowStyle]}
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
    <ImageBackground
      style={styles.container}
      source={{
        uri:
          "https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&w=1000&q=80",
      }}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.todoListContainer}>
            {todoList.map((todo, index) => (
              <TodoItem
                key={todo.id}
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
                placeholderTextColor="#fff"
                selectionColor="#fff"
                value={todoBody}
                style={styles.todoInput}
              ></TextInput>
              <TouchableOpacity
                style={[styles.btnSubmit, styles.shadowStyle]}
                onPress={onSubmitTodo}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  todoListContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 25,
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
    color: "#fff",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 15,
    fontSize: 20,
    borderColor: "white",
  },
  btnSubmit: {
    height: 50,
    width: "50%",
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#22AED1",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
