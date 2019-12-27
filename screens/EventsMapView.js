import React, { Component } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import NavigationBar from '../ui-kit/NavigationBar';
import Geolocation from '@react-native-community/geolocation';
import DummyData from '../DummyData';
import EventHeaderCard from '../ui-kit/EventHeaderCard';
import Carousel from 'react-native-snap-carousel';

class EventMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: DummyData,
      latitude: 0,
      longitude: 0
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition((data) =>
      this.setState({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      })
    )
  }

  renderCarousel = ({ item }) => {
    return (
      <EventHeaderCard navigation={this.props.navigation} item={item} />
    )
  }

  onItemChange = (index) => {
    let location = this.state.coordinates[index]
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.map}
          ref={map => this._map = map}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
          }}
        >
          {
            DummyData.map(data => {
              return (
                <View key={data.id}>
                  <MapView.Marker
                    coordinate={{
                      latitude: data.latitude,
                      longitude: data.longitude
                    }}
                    title={data.title}>
                  </MapView.Marker>
                </View>
              )
            })
          }
        </MapView>
        <View style={styles.carouselWrapper}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.coordinates}
            renderItem={this.renderCarousel}
            onSnapToItem={(index) => this.onItemChange(index)}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width * .75}
          />
        </View>
        {/* <NavigationBar navigation={this.props.navigation} /> */}
      </SafeAreaView>
    );
  }
}

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
    width: '100%',
    paddingHorizontal: '20%'
  },
  carouselWrapper: {
    position: 'absolute',

    bottom: 40,
  }
});

//make this component available to the app
export default EventMapView;