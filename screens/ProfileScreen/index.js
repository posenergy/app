import React from 'react'
import {ScrollView} from 'react-native'
import { connect } from 'react-redux'

import config from '../../config/config'
import styles from './styles'
import Button from '../../components/Button'

import BlackStyleTextInput from '../../components/BlackStyleTextInput'
import { token } from '../../redux/actions/tokenActions'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
})

const mapDispatchToProps = {
  token,
}

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      name: '',
      buffertime: '',
      wakeup: '',
      bedtime: '',
      token: this.props.token,
    }
  }

  async getprofile(tokened) {
    try {
      let responseJSON
      const apiUrl = `${config.apiUrl}/users/id`
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': tokened,
        },
      })
      if (!response.ok) {
    console.log(this.props.token)

                return false
      } 
      else {
        responseJSON = await response.json()
        console.log(responseJSON)
      }

      return responseJSON
    } catch(error) {
      console.error(error)
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
      <Button 
      type = 'login'
      onClick = {() => this.getprofile(this.state.token)}>
      </Button>
      </ScrollView>
    )
  }
}

export default connect ( mapStateToProps, mapDispatchToProps)(ProfileScreen)
