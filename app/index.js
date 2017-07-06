import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// import {Container} from './components/Container';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A'
})

class App extends Component {
  render(){
    return(
  <Home />
    )
  }
}

export default App
