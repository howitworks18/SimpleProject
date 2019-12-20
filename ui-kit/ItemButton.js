import React, { Component } from 'react';
import SVGhelper from '../assets/SVGhelper'; 
import { TouchableOpacity } from 'react-native';

class ItemButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <SVGhelper svg={this.props.icon}/>
      </TouchableOpacity>
    );
  }
}

export default ItemButton;
