import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Agenda} from 'react-native-calendars';

export default class CalendarView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    const sampleData = {
      '2019-11-25':[{title:'1 Cool Event', info:'some data about the event'}],
      '2019-11-26':[{title:'2 Cool Event', info:'some data about the event'}],
      '2019-11-27':[{title:'3 Cool Event', info:'some data about the event'}],
      '2019-11-28':[{title:'4 Cool Event', info:'some data about the event'}],
      '2019-12-01':[{title:'5 Cool Event', info:'some data about the event'}],
      '2019-12-02':[{title:'6 Cool Event', info:'some data about the event'}],
      '2019-12-03':[{title:'7 Cool Event', info:'some data about the event'}],
      '2019-12-29':[],
    }
    return (
      <Agenda
        items={sampleData}
        loadItemsForMonth={this.loadItems.bind(this)}
        selected={new Date()}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
      />
    );
  }

  loadItems(day) {
    console.log(day)
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <TouchableOpacity 
        style={[styles.item, {height: item.height}]}
        onPress={ () => this.props.navigation.navigate('CalendarEventView', { data: item }) }>
        <View><Text>{item.title}</Text></View>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  }
});