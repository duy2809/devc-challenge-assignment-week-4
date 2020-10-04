import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { TODOS } from "../utils/data";

export default function CompleteScreen({ navigation }) {
  const TodoItem = (props) => {
    return (
      <TouchableOpacity
        key={props.todo.body}
        style={[styles.todoItem, styles.shadowStyle]}
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
          "https://cdn.wallpaperhub.app/cloudcache/7/4/f/3/d/5/74f3d51cbec9db78da32e103de1b28538af1b76a.jpg",
      }}
    >
      <ScrollView contentContainerStyle={styles.todoListContainer}>
        {TODOS.map((todo, index) =>
          todo.status === "Done" ? (
            <TodoItem key={todo.body} todo={todo} index={index} />
          ) : null
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  todoListContainer: {
    flex: 1,
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
    backgroundColor: "#76B041",
  },
  todoText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
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
