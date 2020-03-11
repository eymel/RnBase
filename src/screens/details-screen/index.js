import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, Button } from 'native-base'

export function DetailsScreen({ navigation }) {
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Text>Details Screen</Text>
        <Button
          info
          style={styles.button}
          onPress={() => navigation.push('Details')}
        >
          <Text>Go to Details... again</Text>
        </Button>
        <Button
          primary
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>Go to Home</Text>
        </Button>
        <Button
          success
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text>Go back</Text>
        </Button>
        <Button
          danger
          style={styles.button}
          onPress={() => navigation.popToTop()}
        >
          <Text>Go back to first screen in stack</Text>
        </Button>
      </Content>
    </Container>
  )
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  button: {
    width: '100%',
    marginVertical: 5
  }
})
