import React from 'react'
import { ImageBackground, ScrollView, Alert} from 'react-native'

import config from '../../config/config'
import styles from './styles'

import Logo from '../../components/Logo'
import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'
import { NavigationActions } from 'react-navigation'


export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      name: '',
      buffertime: '',
      wakeup: '',
      bedtime: '',
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.view}
        showsVerticalScrollIndicator = {false} >
      <BlackStyleTextInput
        pholder='Name'
        imagelink = {require('../../images/profileblack.png')}
        changeFunction={name => this.setState({name})}
        borderBottomColor= 'black'/>
      <BlackStyleTextInput
        pholder='Email'
        imagelink = {require('../../images/mailblack.png')}
        changeFunction={email => this.setState({email})}/>
      <BlackStyleTextInput
        pholder='Password'
        imagelink = {require('../../images/lockblack.png')}
        changeFunction={password => this.setState({password})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder='Buffer Time'
        imagelink = {require('../../images/buffertime.png')}
        changeFunction={buffertime => this.setState({buffertime})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder='Wakeup'
        imagelink = {require('../../images/sun.png')}
        changeFunction={wakeup => this.setState({wakeup})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder='Bedtime'
        imagelink = {require('../../images/night.png')}
        changeFunction={bedtime => this.setState({bedtime})}
        passwordSecure={true}/>
      </ScrollView>
    )
  }
}
