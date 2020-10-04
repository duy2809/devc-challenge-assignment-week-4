import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route }) {
  const { id, status, body } = route.params;
  // console.log(route.params);
  return (
    <View style={styles.container}>
      {status === "Done" ? (
        <Image
          style={styles.image}
          source={require("../assets/checked.png")}
        ></Image>
      ) : (
        <Image
          style={styles.image}
          source={require("../assets/processing.png")}
        ></Image>
      )}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {id}. {status}
        </Text>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  headerContainer: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 50,
    textAlign: "center",
  },
  image: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },
});
