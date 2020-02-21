import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';

export function CounterScreen({navigation}) {
  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Counter Screen</Text>
      <Text style={styles.counter_text}>{counter}</Text>
      <View style={styles.counterButtons}>
        <TouchableOpacity
          style={styles.butonContainer}
          onPress={() => {
            setCounter(counter - 1);
          }}>
          <View style={[styles.button, styles.button_red]}>
            <Text style={styles.button_text}> - </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.butonContainer}
          onPress={() => {
            setCounter(counter + 1);
          }}>
          <View style={[styles.button, styles.button_green]}>
            <Text style={styles.button_text}> + </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  counter_text: {fontSize: 50,fontWeight:"bold"},
  counterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    marginVertical: 10,
  },
  butonContainer: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 100,
  },
  button_text: {color: 'white', fontSize: 50},
  button_red: {
    backgroundColor: 'red',
  },
  button_green: {
    backgroundColor: 'green',
  },
});
