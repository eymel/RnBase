import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Text, Button} from 'native-base';

export function RegisterScreen({navigation}) {
  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Button light onPress={() => navigation.navigate('Login')}>
          <Text>Go to Login</Text>
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
