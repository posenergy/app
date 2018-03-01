import React from 'react'
import { View, Alert, ScrollView, Text, ImageBackground } from 'react-native'
import ValidationComponent from 'react-native-form-validator'

import config from '../../config/config'
import styles from './styles'

import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'

export default class RegisterScreen2 extends ValidationComponent {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      gender: '',
    }

  }

  // ensures that all fields are filled before submission
  onSubmit() {
    this.validate({
      name: {required: true},
      email: {required: true},
      password: {required: true, minlength: 7},
      confirmpassword: {required: true, minlength: 7},
    })
  }


async writeUser(name, email, password, confirmpassword, gender) {
  if (this.checkPwd(password) && this.validPassword(password, confirmpassword) && this.validEmail(email)) {
    try {
      let responseJSON
      const apiUrl = `${config.apiUrl}/users`
      let response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          hash: password,
          gender: gender,
        }),
      })
      if (!response.ok) {
        Alert.alert(
          'Unable to create user',
          'Please try again! Is it possible that your email is already in use?',
          [
            {text: 'Try Again'},
          ],
          { cancelable: true }
        )
      } else {
        responseJSON = await response.json()
        this.props.navigation.navigate('MainTab')
      }
      return responseJSON
    } catch(error) {
      console.error(error)
    }
  }
}


  validEmail(email) {
    if (email !== '') {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(reg.test(email) === false) {
        Alert.alert(
        'Cannot Register User',
        'Email is invalid.',
        [
          {text: 'OK'},
        ],
        { cancelable: false })
        return false
      } else {
        return true
      }
      // no error displayed if field is not filled in
    } else {
      return true
    }
  }

  checkPwd(password) {
    if (password !== '') {
      if ((password.length < 6) || (password.length > 50) || (password.search(/\d/) === -1)) {
        Alert.alert(
        'Password is invalid.',
        'Must be at least 7 characters long and contain at least one number.',
        [
          {text: 'OK'},
        ],
        { cancelable: false })
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  validPassword(password, confirmpassword) {
    if(password === confirmpassword) {
      return true
    } else {
      Alert.alert(
      'Cannot Register User',
      'Passwords do not match',
      [
        {text: 'OK'},
      ],
      { cancelable: false })
      return false
    }
  }

  render() {
    return (
      <ImageBackground
      source={require('../../images/gradient.png')}
      style={styles.container}>
      <ScrollView
        style={styles.view}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
        <View>
          <StyleTextInput
            pholder='Name'
            imagelink = {require('../../images/profile.png')}
            passwordSecure = {false}
            changeFunction ={name => this.setState({name})}
          />
          <StyleTextInput
            pholder='Email'
            imagelink = {require('../../images/mail.png')}
            passwordSecure = {false}
            changeFunction ={email => this.setState({email})}
          />
          <StyleTextInput
            pholder='Password'
            imagelink = {require('../../images/lock.png')}
            passwordSecure = {true}
            changeFunction = {password => this.setState({password})}
          />
          <StyleTextInput
            pholder='Confirm Password'
            imagelink = {require('../../images/lock.png')}
            passwordSecure = {true}
            changeFunction ={confirmpassword => this.setState({confirmpassword})}
          />
          <Text style={styles.link}>
            Passwords must be at least 7 characters long and contain at least one number.
          </Text>
          <Button type='register'
            onClick={() => this.writeUser(this.state.name, this.state.email, this.state.password, this.state.confirmpassword, this.state.gender)}
            text='Sign Up' textColor='black'/>
        </View>
      </ScrollView>
      </ImageBackground>
    )
  }

}


