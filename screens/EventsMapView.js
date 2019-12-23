//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MapView from 'react-native-maps';
import ItemButton from '../ui-kit/ItemButton';
import NavigationBar from '../ui-kit/NavigationBar';
import Geolocation from '@react-native-community/geolocation';
import DummyData from '../DummyData';

// create a component
class EventMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude:0,
      longitude:0
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition((data)=>
      this.setState({
        latitude:data.coords.latitude,
        longitude:data.coords.longitude
      })
    )
   }

  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          region={{
          latitude: this.state.latitude,
          longitude:  this.state.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
          }}
        >
          {
            DummyData.map(data => {
              return(
               <View key={data.id}>
                 <MapView.Marker
                  coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude }}
                  title={data.title}>
                  </MapView.Marker>
               </View> 
              )
            })
          }
        </MapView>
        <NavigationBar navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    paddingVertical: 10,
    width:'100%',
    paddingHorizontal: '20%'
  },
});

//make this component available to the app
export default EventMapView;
