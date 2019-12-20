import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CalendarEventView extends Component {
    render() {
        const { data } = this.props.route.params;
        return (
            <View style={styles.container}>
                <Text>{data.title}</Text>
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
