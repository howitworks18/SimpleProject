//import liraries
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import ItemButton from './ItemButton';
import moment from 'moment';
import { getDistance } from 'geolib';
import React, { Component } from 'react';

// create a component
class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  componentDidMount() {
    this.setLocation()
  }

  setLocation() {
    Geolocation.getCurrentPosition((data) => {
      this.setState({
        latitude: data.coords.latitude,
        longitude: data.coords.longitude
      })
    })
  }

  distanceCalc(lat, long) {
    if (lat) {
      let distance = getDistance(
        { latitude: lat, longitude: long },
        { latitude: this.state.latitude, longitude: this.state.longitude },
      );
      let calculated = distance * 0.000621
      let distanceFormatted = Math.round(calculated * 10) / 10
      return distanceFormatted.toString()
    }
  }

  itemInViewAnalytics = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      //console.log(viewableItems)
    }
  }
    render() {
      let { item } = this.props;
        return (
            <View style={styles.item}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.distanceCalc(item.latitude, item.longitude)} mi</Text>
                    <Text style={styles.title}>{moment(item.date).format("MM/DD/YYYY")}</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetailsView', { event: item })}>
                    <ImageBackground source={{ uri: item.image }} style={{ justifyContent: 'flex-end', width: '100%', height: 300 }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, .5)', padding: 20 }}>
                            <Text>Test</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <ItemButton icon={'@'} />
                    <ItemButton icon={'%'} />
                    <ItemButton icon={'#'} />
                    <ItemButton icon={'C'} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.eventDetails}</Text>
            </View>
        );
    }
}

// define your styles
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
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    paddingBottom: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: '20%'
  },
  descriptionTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  description: {
    paddingTop: 5
  },
  tabNav: {
    height: 50,
    width: Dimensions.get('window').width,
  }
});

//make this component available to the app
export default Event;
