import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StackNavigator from './StackNavigator'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
