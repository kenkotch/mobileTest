import React, { Component } from 'react'
import {
  Platform,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'
import { StackNavigator } from 'react-navigation'
styles = require('../../assets/stylesheet/Styles')

export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state={
      username: '',
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
    alert('test')
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior='padding'
        style={ styles.wrapper }
      >
        <View style={ styles.container }>

          <Text style={ styles.header }> - Login - </Text>

          <TextInput
            style={ styles.textInput }
            placeholder='username'
            onChangeText={ (username) => this.setState({ username })}
            underlineColorAndroid='transparent'
          />

          <TextInput
            style={ styles.textInput }
            placeholder='password'
            onChangeText={ (password) => this.setState({ password })}
            underlineColorAndroid='transparent'
          />

        <TouchableOpacity
          style={ styles.btn }
          onPress={ this.login }
        >
        <Text> Login </Text>
      </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>
    )
  }
}
