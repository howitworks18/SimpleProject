import { View,  StyleSheet, Text, Dimensions } from 'react-native';
import React, { Component } from 'react';
import DummyData from '../DummyData';
import { inject, observer } from "mobx-react";
import EventHeaderCard from './EventHeaderCard';
import Carousel from 'react-native-snap-carousel';

class EventsHeader extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.featuredText}>See Whats Featured</Text>
        <Carousel
          data={DummyData}
          autoplay
          autoplayDelay={3000}
          loop
          renderItem={({ item }) => <EventHeaderCard navigation={this.props.navigation} item={item} />}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width * .75 }
          ref={(c) => { this._carousel = c; }}
        />
        <Text style={styles.upcomngText}>Upcoming Events</Text>
      </View>
    );
  }
}


//make this component available to the app
export default inject('UserStore')(observer(EventsHeader));



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
  },
  featuredText: {
    paddingVertical: 20,
    fontSize: 17,
    fontWeight: 'bold'
  },
  upcomngText: {
    paddingVertical: 30,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
