
import React, {Component} from 'react';
import AppNavigation from './appcode/Pages/Navigation';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import state from './appcode/Redux/Mappings/ComponentMappings';

let store=createStore(state);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
       <AppNavigation/>
      </Provider>
    );
  }
}

/*

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/