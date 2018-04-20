import React from 'react'
import { Alert, ImageBackground, KeyboardAvoidingView, Text, View } from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux'

import config from '../../config/config'
import styles from './styles'

import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'

const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
  id: state.userReducer.id,
})

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bufferTime: "",
      startTime: "",
      endTime: "",
      initstartTime: this.props.navigation.state.params.startTime,
      initendTime: this.props.navigation.state.params.endTime,
      initBuffer: this.props.navigation.state.params.bufferTime.toString(),
    }
  }

  async changeFields () {
    try {
      let bodyObj = {id : this.props.id}
        if (bufferTime !== ""){
          JSONobj.recoverTime = this.state.bufferTime
        }
        else if (startTime !== ""){
          JSONobj.dayStart = this.state.startTime
        }
        else if (endTime !== ""){
          JSONobj.dayEnd = this.state.endTime
        }
      let responseJSON
      const apiUrl = `${config.apiUrl}/users`
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.props.token,
        },
      body: bodyObj ,
      })
      if (!response.ok) {
        return false
      } else {
        responseJSON = await response.json()
      } return responseJSON
    } catch(error) {
      console.error(error)
    }
  }

  render() {
    let bufferdata = [{
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

    let hourdata = [{
      value: '00:00',
    }, {
      value: '01:00',
    }, {
      value: '02:00',
    }, {
      value: '03:00',
    }, {
      value: '04:00',
    }, {
      value: '05:00',
    }, {
      value: '06:00',
    }, {
      value: '07:00',
    }, {
      value: '08:00',
    }, {
      value: '09:00',
    }, {
      value: '10:00',
    }, {
      value: '11:00',
    }, {
      value: '12:00',
    }, {
      value: '13:00',
    }, {
      value: '14:00',
    }, {
      value: '15:00',
    }, {
      value: '16:00',
    }, {
      value: '17:00',
    }, {
      value: '18:00',
    }, {
      value: '19:00',
    }, {
      value: '20:00',
    }, {
      value: '21:00',
    }, {
      value: '22:00',
    }, {
      value: '23:00',
    }];

    return (
        <View
          style={styles.view}>
            <Dropdown
                containerStyle={{width: 300, height: 100 }}
                marginBottom={50}
                itemCount={6}
                textColor= 'black'
                baseColor= 'black'
                selectedItemColor= '#545680'
                itemTextStyle={{fontFamily: 'Circular Std', color: 'black'}}
                label= 'Buffer Time'
                data={bufferdata}
                onChangeText = {(value) => this.setState({bufferTime: parseInt(value) })}
              />
            <Dropdown
                containerStyle={{width: 300, height: 100 }}
                marginBottom={50}
                itemCount={6}
                textColor= 'black'
                baseColor= 'black'
                selectedItemColor= '#545680'
                itemTextStyle={{fontFamily: 'Circular Std', color: 'black'}}
                label='Wakeup'
                data={hourdata}
                onChangeText = {(value) => this.setState({startTime: value})}
              />
            <Dropdown
                containerStyle={{width: 300, height: 100 }}
                marginBottom={50}
                itemCount={6}
                textColor= 'black'
                baseColor= 'black'
                selectedItemColor= '#545680'
                itemTextStyle={{fontFamily: 'Circular Std', color: 'black'}}
                label='Sleep'
                data={hourdata}
                onChangeText = {(value) => this.setState({endTime: value})}
              />
            <Button
              text = 'Confirm'
              textColor = 'whiteLogOut'
              type = 'purple'
              onClick = {() => {this.changeFields()}}/>
          </View>
    )
  }

}

export default connect (mapStateToProps, null)(EditProfileScreen)
