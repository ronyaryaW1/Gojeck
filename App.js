import {Image, Text, View} from 'react-native';
import React, {Component} from 'react';

import Demo from './src/modules/container/Demo';
import HomeScreen from './src/modules/container/HomeScreen'
import NavbarButtom from './src/modules/component/NavbarButtom'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}} >
        <View style={{flex: 1}}>
          <HomeScreen/>
        </View>
        <NavbarButtom/>
      </View>
      // <View>
      //   <Demo/>
      // </View>
    );
  }
}
