import React from 'react'
import { View } from 'react-native'
import Thumbnail from 'react-native-thumbnail-video';

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
      <View style = {styles.viewStyle}>
        <Logo />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Register')}
          text="Sign Up" textColor="black"
        />
        <Button style = {styles.button} type="login" onClick={() => this.props.navigation.navigate('Login')}
          text="Login" textColor="black"
        />
        <SchedModal
          title = "Detox Yoga"
          image = {require('../../images/yoga.png')}
          text = "30 minute yoga filled with detoxifying twists"
          varelement = {<Thumbnail
                          url="https://www.youtube.com/watch?v=cBPP_izKKSs"
                          imageWidth={244}
                          imageHeight={142} />}
        />
      </View>
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
