import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Anmeldungen from './Screens/Anmeldungen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Anmelden"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Herzlich Willkommen' }}
        />
        <Stack.Screen
          name="Logins"
          component={Anmeldungen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};