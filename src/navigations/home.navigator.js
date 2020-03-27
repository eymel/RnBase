import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text, Button } from 'native-base'

import { HomeScreen, DetailsScreen, CounterScreen } from '../screens'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Menu } from '../components/icons'

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
              <TouchableOpacity
                style={{ paddingHorizontal: 10 }}
                onPress={() => navigation.openDrawer()}
              >
                <Menu stroke="black" width={24} height={24} />
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
