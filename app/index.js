import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
// import {Container} from './components/Container';
import Home from './screens/Home';
import Drawer from 'react-native-drawer'


EStyleSheet.build({
  $primaryBlue: '#4F6D7A'
})

class App extends Component {

//for drawer (side menu)
closeControlPanel = () => {
   this._drawer.close()
 };
 openControlPanel = () => {
   this._drawer.open()
 };


  render(){
    return(
      <Drawer
        type="overlay"
        content={<ControlPanel />}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
      >
      <Main />
    </Drawer>

    )
  }
}

export default App
