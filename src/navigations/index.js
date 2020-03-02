import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthNavigator} from './auth.navigator';
import {HomeNavigator} from './home.navigator';

const Stack = createStackNavigator();

const isAuthorized = true;

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={isAuthorized ? 'Home' : 'Auth'}
      headerMode="none">
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="Home" component={HomeNavigator} />
    </Stack.Navigator>
  );
}
