import React from 'react'
import {ScrollView} from 'react-native'

import styles from './styles'

import BlackStyleTextInput from '../../components/BlackStyleTextInput'

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
        pholder='Buffer Time'
        imagelink = {require('../../images/buffertime.png')}
        changeFunction={buffertime => this.setState({buffertime})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder='Start Time'
        imagelink = {require('../../images/sun.png')}
        changeFunction={wakeup => this.setState({wakeup})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder='End Time'
        imagelink = {require('../../images/night.png')}
        changeFunction={bedtime => this.setState({bedtime})}
        passwordSecure={true}/>
      </ScrollView>
    )
  }
}
