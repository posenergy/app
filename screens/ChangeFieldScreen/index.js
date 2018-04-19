import React from 'react'
import { Alert, ImageBackground, KeyboardAvoidingView, Text, View } from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { NavigationActions } from 'react-navigation'
import { Dropdown } from 'react-native-material-dropdown';

import config from '../../config/config'
import styles from './styles'

import { token } from '../../redux/actions/tokenActions'
import { prepopulate, onboarding } from '../../redux/actions/userActions'

import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'


class ChangeFieldScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ""
    }
    }

  render() {
    let data = [{
      value: '0 min',
    }, {
      value: '5 min',
    }, {
      value: '10 min',
    }, {
      value: '15 min',
    }, {
      value: '20 min',
    }, {
      value: '25 min',
    }, {
      value: '30 min',
    }, {
      value: '35 min',
    }, {
      value: '40 min',
    }, {
      value: '45 min',
    }, {
      value: '50 min',
    }, {
      value: '55 min',
    }, {
      value: '60 min',
    }];

    return (
        <View
          style={styles.view}>
          <Text>
          {this.state.selected}
          </Text>
            <Dropdown
                containerStyle={{width: 300, height: 100 }}
                marginBottom={50}
                itemCount={6}
                textColor= 'black'
                baseColor= 'black'
                selectedItemColor= '#545680'
                itemTextStyle={{fontFamily: 'Circular Std', color: 'black'}}
                label='Buffer Time'
                data={data}
                onChangeText = {(value) => this.setState({selected: value})}
              />
            <Button
              text = 'Confirm'
              textColor = 'whiteLogOut'
              type = 'purple'
              onClick = {() => {this.logout()}}/>
          </View>
    )
  }

}

export default ChangeFieldScreen
