import { SafeAreaView, View, StyleSheet, Button} from 'react-native';
import React, { Component } from 'react';
import TextField from '../ui-kit/TextField';
import ScrollContainer from '../ui-kit/ScrollContainer';
import {inject, observer} from "mobx-react";

class LoginView extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollContainer>
          <View style={styles.inputWrapper}>
            <TextField
            placeholder={ 'Email' }/>
            <TextField
            placeholder={ 'Password' }/>
          </View>
        </ScrollContainer>
        <Button
        title="Login"
        onPress={() => this.props.navigation.push('EventsView')}
        />
    </SafeAreaView>
    );
  }
}

export default inject('UserStore')(observer(LoginView));



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
