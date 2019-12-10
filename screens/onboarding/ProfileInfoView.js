import { SafeAreaView, View, FlatList, StyleSheet, TextInput , Button} from 'react-native';
import React, { Component } from 'react';
import TextField from '../../ui-kit/TextField';

class EventView extends Component {
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputWrapper}>
          
          <View style={ styles.nameWrapper }>
            <TextField
            placeholder={ 'First Name' }/>
            <TextField
            placeholder={ 'Last Name' }/>
          </View>

          <View>
            <TextField
            placeholder={ 'Email' }/>
            <TextField
            placeholder={ 'Confirm Email' }/>
            <TextField
            placeholder={ 'Password' }/>
            <TextField
            placeholder={ 'Confirm Password' }/>
          </View>

        </View>

        <Button
        title="InterestsView"
        onPress={() => this.props.navigation.navigate('InterestsView')}
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
