import { SafeAreaView, View, FlatList, StyleSheet } from 'react-native';
import React, { Component } from 'react';
import ItemButton from '../ui-kit/ItemButton';
import DummyData from '../DummyData';
import Event from '../ui-kit/Event';
import NavigationBar from '../ui-kit/NavigationBar';
import EventsHeader from '../ui-kit/EventsHeader';
import { inject, observer } from "mobx-react";

class EventView extends Component {  
  
  itemInViewAnalytics = (data) => {
    //future analytics here
    console.log(data.changed[0].item)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DummyData}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={({ item }) => <EventsHeader navigation={ this.props.navigation } item={ item }/>}
          renderItem={({ item }) => <Event navigation={ this.props.navigation } item={ item }/>}
          keyExtractor={item => item.id}
          
        />
        <NavigationBar navigation={this.props.navigation}/>
    </SafeAreaView>
    );
  }
}


//make this component available to the app
export default inject('UserStore')(observer(EventView));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  paper: {
    height:50,
    width:50,
    backgroundColor:'blue'
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent:'space-around',
    paddingVertical:10,
    paddingHorizontal: '20%'
  },
});
