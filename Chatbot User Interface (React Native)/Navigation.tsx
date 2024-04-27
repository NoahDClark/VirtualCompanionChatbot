
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './ChatScreen';
import MainMenuScreen from './MainMenuScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import AccountScreen from './AccountScreen';
import ChatHistoryScreen from './ChatHistoryScreen';
import ChangePasswordScreen from './ChangePasswordScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChatHistoryScreen" component={ChatHistoryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;