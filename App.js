import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const routeItems = {
  All: "ios-add-circle-outline",
  Complete: "ios-done-all",
  Active: "ios-settings",
};

export const TODOS = [
  {
    id: 1,
    status: "Done",
    body: "Read Instructions",
  },
  {
    id: 2,
    status: "Done",
    body: "Think a bit",
  },
  {
    id: 3,
    status: "Done",
    body: "Google 'How to build todo app",
  },
  {
    id: 4,
    status: "Done",
    body: "Read results from Google",
  },
  {
    id: 5,
    status: "Done",
    body: "Google 'How to build todo app using React Native",
  },
  {
    id: 6,
    status: "Active",
    body: "Read results from Google again",
  },
  {
    id: 7,
    status: "Active",
    body: "Spend some more time thinking",
  },
  {
    id: 8,
    status: "Active",
    body: "Use knowledge gained at CoderSchool to build new todo app",
  },
];

const AllStack = () => {
  return (
    <Stack.Navigator initialRouteName="All">
      <Stack.Screen name="All" component={All} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const Complete = () => <Text>Complete</Text>;
const Active = () => <Text>Active</Text>;
const All = () => {
  return <ScrollView>{TODOS.map((todo) => {})}</ScrollView>;
};
const Detail = () => <Text>Detail</Text>;

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={routeItems[route.name]}
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
        <Tab.Screen name="All" component={AllStack} />
        <Tab.Screen name="Active" component={Active} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
