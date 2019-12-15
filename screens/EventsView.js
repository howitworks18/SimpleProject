import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, TouchableOpacity , Button, Dimensions} from 'react-native';
import React, { Component } from 'react';
import ItemButton from '../ui-kit/ItemButton';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import { getDistance } from 'geolib';
import DummyData from '../DummyData';
import {inject, observer} from "mobx-react";


class EventView extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      latitude:0,
      longitude:0
    };
  }
  
  componentDidMount() {
    this.setLocation()
   }

   setLocation(){
    Geolocation.getCurrentPosition((data)=>{
      this.setState({
        latitude:data.coords.latitude,
        longitude:data.coords.longitude
      })
    })
   }

  distanceCalc(lat, long){
    if(lat){
      let distance = getDistance(
        { latitude: lat, longitude: long },
        { latitude: this.state.latitude, longitude: this.state.longitude },
      );
    let calculated = distance * 0.000621
    let distanceFormatted = Math.round( calculated * 10 ) / 10
     return distanceFormatted.toString()
    }
  }

  itemInViewAnalytics = ({ viewableItems }) => {
    if(viewableItems.length > 0){
      //console.log(viewableItems)
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DummyData}
          renderItem={({ item }) => 
            <View style={styles.item}>
            <View style={styles.header}>
              <Text style={styles.title}>{this.distanceCalc(item.latitude, item.longitude)} mi</Text>
              <Text style={styles.title}>{moment(item.date).format("MM/DD/YYYY")}</Text>
            </View>
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('EventDetailsView', { event: item }) }>
              <Image source={{uri: item.image}}
              style={{width: '100%', height: 300}} />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <ItemButton icon={'@'}/>
              <ItemButton icon={'%'}/>
              <ItemButton icon={'#'}/>
              <ItemButton icon={'C'}/>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.eventDetails}</Text>
          </View>}
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
  item: {
    padding: 10,
    borderTopColor: '#bfbfbf',
    borderTopWidth: .5, 
    marginVertical: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  title: {
    fontSize: 24,
    paddingBottom:5
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
    paddingHorizontal: '20%'
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize:20
  },
  description: {
    paddingTop: 5
  },
  tabNav: {
    height: 50,
    width: Dimensions.get('window').width,
  }
});
