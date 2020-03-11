import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, Button } from 'native-base'

export function HomeScreen({ navigation }) {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Button light onPress={() => navigation.navigate('Details')}>
          <Text>Go to Details</Text>
        </Button>
        <Button
          primary
          title="Go to Counter Example"
          onPress={() => navigation.navigate('Counter')}
        >
          <Text>Go to Counter Example</Text>
        </Button>

        <Button
          danger
          onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
        >
          <Text>Go To Login</Text>
        </Button>
      </Content>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
