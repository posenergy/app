import React from 'react'
<<<<<<< HEAD
import { ScrollView, ImageBackground } from 'react-native'
=======
import { View } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video';
>>>>>>> Added thumbnail functionality.

import styles from './styles'

import Logo from '../../components/Logo'
import Button from '../../components/Button'
import SchedModal from '../../components/SchedModal'
import RadioButtonList from '../../components/RadioButtonList'

export default class LandingScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ImageBackground
      source={require('../../images/gradient.png')}
      style = {styles.viewStyle}>
        <ScrollView>
        <Logo />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Register')}
          text="Sign Up" textColor="black"
        />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Login')}
          text="Login" textColor="black"
        />
        </ScrollView>
      </ImageBackground>
    )
  }

}

/*<RadioButtonList
  radioprops = {[{label: 'Wed, Feb 3, 5:30 - 6:00 pm', value: 0 },
                 {label: 'Wed, Feb 3, 6:00 - 6:30 pm', value: 1 },
                 {label: 'Thurs, Feb 4, 9:00 - 9:30 am', value: 2 },
                 {label: 'Thurs, Feb 4, 3:30 - 4:00 pm', value: 3 },
                 {label: 'Fri, Feb 5, 12:30 - 1:00 pm', value: 4 },]}
                      />
*/
