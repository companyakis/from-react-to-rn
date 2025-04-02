import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0)

  const counterPlus = () => {
    setCounter(counter + 1)
  }

  const counterMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Button title='Counter ++' onPress={counterPlus} />
      <Text>{counter}</Text>
      <Button title='Counter --' onPress={counterMinus} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
