import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompleteScreen from "../screens/CompleteScreen";

const Stack = createStackNavigator();

export default function CompleteNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Complete" component={CompleteScreen} />
    </Stack.Navigator>
  );
}
