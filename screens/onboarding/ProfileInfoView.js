import { SafeAreaView, View, StyleSheet, Button} from 'react-native';
import React, { Component } from 'react';
import TextField from '../../ui-kit/TextField';
import ScrollContainer from '../../ui-kit/ScrollContainer';

class ProfileInfoView extends Component {
  
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollContainer>
          <View style={styles.inputWrapper}>
            <View style={ styles.nameWrapper }>
              <TextField
              placeholder={ 'First Name' }/>
              <TextField
              placeholder={ 'Last Name' }/>
            </View>

            <View>
              <TextField
              placeholder={ 'Email' }/>
              <TextField
              placeholder={ 'Confirm Email' }/>
              <TextField
              placeholder={ 'Password' }/>
              <TextField
              placeholder={ 'Confirm Password' }/>
            </View>
          </View>
        </ScrollContainer>

        <Button
        title="InterestsView"
        onPress={() => this.props.navigation.navigate('InterestsView')}
        />
    </SafeAreaView>
    );
  }
}

export default ProfileInfoView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
  },
  inputWrapper: {

  },
  nameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
