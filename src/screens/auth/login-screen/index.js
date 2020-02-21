import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

export function LoginScreen({navigation}) {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Button light onPress={() => navigation.navigate('Register')}>
          <Text>Go to Register</Text>
        </Button>
        <Button
          primary
          onPress={() => navigation.navigate('Home')}>
          <Text>Go to Home</Text>
        </Button>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
