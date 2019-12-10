import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

class TextField extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <TextInput
                placeholder={ this.props.placeholder }  
                style={ styles.input }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black'   
    },
    input: {
        fontSize: 17,
        padding: 10
    }
});

export default TextField;
