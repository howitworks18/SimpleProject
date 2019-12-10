//import liraries
import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

// create a component
const ScrollContainer = props => {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
            {props.children}
        </SafeAreaView>
      </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
});

//make this component available to the app
export default ScrollContainer;
