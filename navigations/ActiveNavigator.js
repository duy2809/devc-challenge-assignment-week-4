import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ActiveScreen from "../screens/ActiveScreen";

const Stack = createStackNavigator();

export default function ActiveNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Active" component={ActiveScreen} />
    </Stack.Navigator>
  );
}
