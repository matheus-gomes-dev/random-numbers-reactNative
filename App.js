import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const randomNumber = () => {
  let rand = Math.random();
  rand = Math.floor(rand*100);
  alert(rand);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Generate random number" onPress={randomNumber}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
