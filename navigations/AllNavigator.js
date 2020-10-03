import React from "react";
import All from "../screens/AllScreen";
import Detail from "../screens/DetailScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AllNavigator() {
  return (
    <Stack.Navigator initialRouteName="All">
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
