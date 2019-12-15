import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import {inject, observer} from "mobx-react";

class InterestsView extends Component {
    handleInterest=(data)=>{
      this.props.UserStore.interest.push(data)
      console.log(this.props.UserStore.interest)
    }

    render() {
      const interests = ['cool', 'stuff', 'you', 'are', 'interested in', 'like', 'concerts', 'and', 'free', 'booze', 'meet', 'people', 'too!']
        return (
            <SafeAreaView style={styles.container}>
              <View style={styles.interesetWrapper}>
                <Text>Tell us what you enjoy doing</Text>
                  <View style={styles.buttonContainer}>
                    {interests.map((data, index)=> {
                        return(
                          <TouchableOpacity 
                            style={styles.button} 
                            key={index}
                            onPress={()=>this.handleInterest(data)}>
                            <Text>{data}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
              </View>

              <Button
                title="EventsView"
                onPress={() => this.props.navigation.navigate('EventsView')}
                />
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    interesetWrapper: {
      alignItems: 'center',
    }, 
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',

    },
    button: {
      borderWidth: 1,
      borderColor: 'black',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 10,
      margin: 5
    }
});

export default inject('UserStore')(observer(InterestsView));