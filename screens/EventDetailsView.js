//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
class EventDetailsView extends Component {
    render() {
        const { event } = this.props.route.params;
        return (
          <View style={styles.item}>
            <View style={styles.header}>
            </View>
              <Image source={{uri: event.image}}
              style={{width: '100%', height: 300}} />
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.description}>{event.eventDetails}</Text>
          </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
    },
    item: {
      padding: 10,
      marginVertical: 8,
    },
    header: {
      flexDirection: 'row',
      justifyContent:'space-between',
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
      paddingTop: 5
    },
});

//make this component available to the app
export default EventDetailsView;
