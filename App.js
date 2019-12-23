import React, { Component } from 'react';
import StackNavigator from './StackNavigator';
import UserStore from './stores/UserStore';
import { Provider } from 'mobx-react';
import 'react-native-gesture-handler'

class App extends Component {
  render() {
    return (
      <Provider UserStore={UserStore}>
        <StackNavigator/>
      </Provider>
    );
  }
}

export default App;
