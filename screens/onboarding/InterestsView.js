import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

class InterestsView extends Component {

    render() {
      const interests = ['cool', 'stuff', 'you', 'are', 'interested in', 'like', 'concerts', 'and', 'free', 'booze', 'meet', 'people', 'too!']
        return (
            <View style={styles.container}>

              <View style={styles.interesetWrapper}>
                <Text>Tell us what you enjoy doing</Text>
                  <View style={styles.buttonContainer}>
                    {interests.map((data )=> {
                        return(
                          <TouchableOpacity style={styles.button} key={data.index}>
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
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
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


export default InterestsView;
