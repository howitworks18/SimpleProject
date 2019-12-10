//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
class ItemButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={{borderWidth:1, borderColor: 'blue', paddingVertical:6, paddingHorizontal: 8, borderRadius: 15}}>
          <Text>{this.props.icon}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

//make this component available to the app
export default ItemButton;
