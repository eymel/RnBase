import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, DetailsScreen,CounterScreen} from '../screens';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
    </Stack.Navigator>
  );
}
