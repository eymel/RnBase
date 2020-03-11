import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, Button } from 'native-base'

import { HomeScreen, DetailsScreen, CounterScreen } from '../screens'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

export function HomeMainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text name="toogle">Open</Text>
              </TouchableOpacity>
            )
          }
        })}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
    </Stack.Navigator>
  )
}
export function HomeNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeMainNavigator} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  )
}
