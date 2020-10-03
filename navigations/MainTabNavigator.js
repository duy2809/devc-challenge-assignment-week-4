import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { routeIcons } from "../utils/routeIcons";
import { Ionicons } from "@expo/vector-icons";

import All from "./AllNavigator";
import Complete from "./CompleteNavigator";
import Active from "./ActiveNavigator";

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={routeIcons[route.name]}
              size={30}
              color={focused ? "blue" : "gray"}
            />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Complete" component={Complete} />
        <Tab.Screen name="All" component={All} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
