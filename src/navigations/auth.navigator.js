import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginScreen, RegisterScreen} from '../screens/auth';

const Stack = createStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
