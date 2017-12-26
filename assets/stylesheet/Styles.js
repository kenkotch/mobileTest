import React from 'react'
import { StyleSheet } from 'react-native'

module.exports = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    color: '#fff'
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
    borderRadius: 10
  },
  ralewayLight: {
    fontFamily: 'Raleway-Light',
    color: 'black'
  },
  ralewayMedium: {
    fontFamily: 'Raleway-Medium',
    color: 'black'
  },
  ralewayReg: {
    fontFamily: 'Raleway-Regular',
    color: 'black'
  },
  ralewayBlack: {
    fontFamily: 'Raleway-Black',
    color: 'black'
  }
})
