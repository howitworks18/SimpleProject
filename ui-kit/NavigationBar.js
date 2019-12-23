//import liraries
import React, { Component } from 'react';
import ItemButton from './ItemButton';
import { View, StyleSheet } from 'react-native';

// create a component
class NavigationBar extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <ItemButton onPress={() => this.props.navigation.push('EventsView')} icon={'settingsIcon'} />
                <ItemButton onPress={() => this.props.navigation.push('CalendarView')} icon={'calIcon'} />
                <ItemButton onPress={() => this.props.navigation.push('EventsMapView')} icon={'mapIcon'} />
                <ItemButton onPress={() => this.props.navigation.push('SettingsView')} icon={'settingsIcon'} />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: '20%'
    },
});

//make this component available to the app
export default NavigationBar;
