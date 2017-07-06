import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render(){
    return(
      <View>
        <Text>Hello there</Text>
      </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
