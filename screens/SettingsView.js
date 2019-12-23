import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity , Button} from 'react-native';
import ItemButton from '../ui-kit/ItemButton';
import React, { Component } from 'react';

class SettingsView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
       <Text>Settings</Text>
        <View style={styles.buttonContainer}>
          <ItemButton onPress={() => this.props.navigation.push('EventsView')} icon={'settingsIcon'} />
          <ItemButton onPress={() => this.props.navigation.push('CalendarView')} icon={'calIcon'} />
          <ItemButton onPress={() => this.props.navigation.push('EventsMapView')} icon={'mapIcon'} />
          <ItemButton onPress={() => this.props.navigation.push('SettingsView')} icon={'settingsIcon'} />
        </View>
      </SafeAreaView>
    );
  }
}


//make this component available to the app
export default SettingsView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: '20%'
  },
});
