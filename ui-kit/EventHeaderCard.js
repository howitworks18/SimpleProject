//import liraries
import { View, StyleSheet, Text, ImageBackground, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import moment from 'moment';
import { getDistance } from 'geolib';
import React, { Component } from 'react';

// create a component
class EventHeaderCard extends Component {
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
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EventDetailsView', { event: item })}>
                    <ImageBackground 
                      source={{ uri: item.image }} 
                      imageStyle={{ borderRadius: 10 }}
                      style={styles.image}>
                        <View style={{ backgroundColor: 'rgba(153, 153, 153, .3)', padding: 10, borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                          <Text style={styles.title}>{item.title}</Text>
                          <View style={styles.header}>
                            <Text style={styles.subtitle}>{moment(item.date).format("MMMM DD")}</Text>
                            <Text style={styles.subtitle}>{this.distanceCalc(item.latitude, item.longitude)} mi</Text>
                          </View>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { 
    justifyContent: 'flex-end', 
    width: Dimensions.get('window').width - 100,
    height: 200 
  },
  item: {
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    fontSize: 17,
    color: '#FFFFFF',
    paddingBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  tabNav: {
    height: 50,
    width: Dimensions.get('window').width,
  }
});

//make this component available to the app
export default EventHeaderCard;
