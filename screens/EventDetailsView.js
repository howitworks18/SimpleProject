import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { Transition } from 'react-navigation-fluid-transitions';
import Geolocation from '@react-native-community/geolocation';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
      const event = this.props.navigation.getParam('event', null);
        return (
            <View style={styles.container}>
              <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text>Back</Text></TouchableOpacity>
                <Text style={styles.title}>{event.title}</Text>
              <Transition shared={event.id}>
                <Image source={{uri: event.image}}
                  style={styles.paper} />
              </Transition>
                <Text style={styles.description}>{event.eventDetails}</Text>
              </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60,
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
  paper: {
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

//make this component available to the app
export default EventDetailsView;
