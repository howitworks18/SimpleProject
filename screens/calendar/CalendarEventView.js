import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CalendarEventView extends Component {
    render() {
        //const data = this.props.navigation.getParam('event', null)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}><Text>Back</Text></TouchableOpacity>
                <Text>Event details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

export default CalendarEventView;
