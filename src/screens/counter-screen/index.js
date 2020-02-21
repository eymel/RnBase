import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, Button, Text, View} from 'native-base';

export function CounterScreen({navigation}) {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Text>Counter Screen</Text>
        <Text  style={styles.counter_text}>{counter}</Text>
        <View style={styles.counterButtons}>
          <Button
            danger
            style={styles.button}
            onPress={() => {
              setCounter(counter - 1);
            }}>
            <Text style={styles.button_text}> - </Text>
          </Button>
          <Button
            success
            style={styles.button}
            onPress={() => {
              setCounter(counter + 1);
            }}>
            <Text style={styles.button_text}> + </Text>
          </Button>
        </View>

        <Button onPress={() => navigation.navigate('Details')}>
          <Text>Go to Details Screen</Text>
        </Button>
      </Content>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  counter_text: {fontSize: 50, fontWeight: 'bold'},
  counterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 100,
  }
 
});
