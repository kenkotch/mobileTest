import React, { Component } from 'react'
import {
  Platform,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Image
} from 'react-native'
import { StackNavigator } from 'react-navigation'
import KeyboardSpacer from 'react-native-keyboard-spacer'

styles = require('../../assets/stylesheet/Styles')

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state={
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    this._loadInitialState().done()
  }

  _loadInitialState = async () => {
    let value = await AsyncStorage.getItem('user')
    if (value !== null) {
      this.props.navigation.navigate('Profile')
    }
  }

  login = () => {
    fetch('http://192.168.1.39:3000/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(res => {
        // alert(res.message)
        if(res.success === true) {
          AsyncStorage.setItem('user', res.user)
          this.props.navigation.navigate('Profile')
        } else {
          alert(res.message)
        }
      })
      .done()
    }

  render() {
    console.disableYellowBox = true
    return (

        <View style={ styles.container }>

          <Text style={[ styles.header, styles.ralewayBlack ]}>LiLe</Text>

          <Image
            source={ require('../../assets/images/LiLe-logo.png') }
          />

          <TextInput
            style={ styles.textInput }
            placeholder='email'
            onChangeText={ email => this.setState({ email })}
            underlineColorAndroid='transparent'
          />

          <TextInput
            style={ styles.textInput }
            placeholder='password'
            onChangeText={ password => this.setState({ password })}
            underlineColorAndroid='transparent'
            secureTextEntry={ true }
          />

        <KeyboardSpacer />

        <TouchableOpacity
          style={ styles.btn }
          onPress={ this.login }
        >
        <Text style={ styles.ralewayReg }> Login </Text>
      </TouchableOpacity>

        </View>
    )
  }
}
