import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity , Button} from 'react-native';
import React, { Component } from 'react';

class SettingsView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
       <Text>Settings</Text>
    </SafeAreaView>
    );
  }
}


//make this component available to the app
export default SettingsView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
