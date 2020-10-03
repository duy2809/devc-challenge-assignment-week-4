import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ActiveNavigator() {
  return (
    <View style={styles.container}>
      <Text>Active</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
