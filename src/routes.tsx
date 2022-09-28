import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from "./screens/Home";
import { SignIn } from "./screens/Signin";
import { Welcome } from "./screens/Welcome";

const Tab = createNativeStackNavigator();

export function Auth() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Welcome" component={Welcome} />
      <Tab.Screen name="Signin" component={SignIn} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Signin" component={SignIn} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
