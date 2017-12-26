import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
styles = require('../../assets/stylesheet/Styles')

export default class Profile extends Component {

  render() {
    console.disableYellowBox = true
    return (
      <View style={ styles.container }>
        <Text style={ styles.header }>Welcome</Text>
      </View>
    )
  }
}
