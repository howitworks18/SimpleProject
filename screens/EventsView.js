import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import ItemButton from '../ui-kit/ItemButton';
import DummyData from '../DummyData';
import Event from '../ui-kit/Event';
import EventsHeader from '../ui-kit/EventsHeader';
import {inject, observer} from "mobx-react";

class EventView extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  itemInViewAnalytics = (data) => {
    //future analytics here
    console.log(data.changed[0].item)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DummyData}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={({ item }) => <EventsHeader navigation={ this.props.navigation } item={ item }/>}
          renderItem={({ item }) => <Event navigation={ this.props.navigation } item={ item }/>}
          keyExtractor={item => item.id}
          onViewableItemsChanged={(item)=>this.itemInViewAnalytics(item)}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 90
          }}
        />
        
          <View style={styles.buttonContainer}>
            <ItemButton onPress={() => this.props.navigation.push('CalendarView')} icon={'calIcon'}/>
            <ItemButton onPress={() => this.props.navigation.push('EventsMapView')} icon={'mapIcon'}/>
            <ItemButton onPress={() => this.props.navigation.push('SettingsView')} icon={'settingsIcon'}/>
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
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
    paddingHorizontal: '20%'
  },
});
