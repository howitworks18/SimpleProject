import { SafeAreaView, View, FlatList, StyleSheet, TextInput , Button} from 'react-native';
import React, { Component } from 'react';
import TextField from '../ui-kit/TextField';

class EventView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.inputWrapper}>
          <TextField
          placeholder={ 'Email' }/>
          <TextField
          placeholder={ 'Password' }/>
        </View>

        <Button
        title="Login"
        onPress={() => this.props.navigation.push('EventsView')}
        />
    </SafeAreaView>
    );
  }
}

export default EventView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
  },
  inputWrapper: {

  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
