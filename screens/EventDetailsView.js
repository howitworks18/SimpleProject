import React, { Component } from 'react';
import MapView from 'react-native-maps';
import ScrollContainer from '../ui-kit/ScrollContainer';
import Geolocation from '@react-native-community/geolocation';
import { View, Text, StyleSheet, Image } from 'react-native';

class EventDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    render() {
        const { event } = this.props.route.params;
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.title}>{event.title}</Text>
                <Image source={{uri: event.image}}
                  style={{width: '100%', borderRadius: 8, height: 300}} />
                <Text style={styles.description}>{event.eventDetails}</Text>
              </View>
              <MapView
                style={styles.map}
                region={{
                  latitude: event.latitude,
                  longitude: event.longitude,
                  latitudeDelta: 0.09,
                  longitudeDelta: 0.035
                }}
              >
                <MapView.Marker
                  coordinate={{
                    latitude: event.latitude,
                    longitude: event.longitude
                  }}
                  title={event.title}>
                </MapView.Marker>
              </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'space-between',
    },
    item: {
      padding: 10,
      marginVertical: 8,
    },
    map: {
      height: 200
    },
    header: {
      padding: 10,
    },
    title: {
      fontSize: 24,
      paddingVertical:5
    },
    descriptionTitle: {
      fontWeight: 'bold',
      fontSize:20
    },
    description: {
      paddingTop: 10
    },
});

//make this component available to the app
export default EventDetailsView;
