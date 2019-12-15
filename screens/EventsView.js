import { SafeAreaView, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import React, { Component } from 'react';
import ItemButton from '../ui-kit/ItemButton';
import DummyData from '../DummyData';
import Event from '../ui-kit/Event';
import {inject, observer} from "mobx-react";

class EventView extends Component {  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DummyData}
          renderItem={({ item }) => <Event item={item}/>}
          keyExtractor={item => item.id}
          onViewableItemsChanged={this.itemInViewAnalytics}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 90
          }}
        />
        <View style={styles.tabNav}>
          <View style={styles.buttonContainer}>
            <ItemButton onPress={() => this.props.navigation.push('CalendarView')} icon={'C'}/>
            <ItemButton onPress={() => this.props.navigation.push('EventsMapView')} icon={'M'}/>
            <ItemButton onPress={() => this.props.navigation.push('SettingsView')} icon={'S'}/>
          </View>
        </View>
    </SafeAreaView>
    );
  }
}


//make this component available to the app
export default inject('UserStore')(observer(EventView));



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
    paddingHorizontal: '20%'
  }
});
