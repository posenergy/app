import React from 'react'
import { Alert, ImageBackground, KeyboardAvoidingView, Text, View } from 'react-native'
import ValidationComponent from 'react-native-form-validator'
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux'
import { prepopulate } from '../../redux/actions/userActions'

import config from '../../config/config'
import styles from './styles'

import StyleTextInput from '../../components/StyleTextInput'
import Button from '../../components/Button'

const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
  id: state.userReducer.id,
})

const mapDispatchToProps = {
  prepopulate,
}

class EditProfileScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bufferTime: "",
      startTime: "",
      endTime: "",
      initstartTime: this.props.navigation.state.params.startTime.toString(),
      initendTime: this.props.navigation.state.params.endTime.toString(),
      initBuffer: this.props.navigation.state.params.bufferTime.toString(),
    }
  }

  handleClick = () => {
    this.props.navigation.state.params.updateState()
  }

   async fetchUserInfo() {
    console.log("CALL THIS FUNC")
    try {
      let responseJSON
      const apiUrl = `${config.apiUrl}/users/id`
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.props.token,
        },
      })
      if (!response.ok) {
        return false
      } else {
        responseJSON = await response.json()
        console.log(responseJSON)
        this.props.prepopulate(responseJSON.name, responseJSON.recoverTime,
                               responseJSON.dayStart, responseJSON.dayEnd,
                               responseJSON.email, responseJSON._id)
      } return responseJSON
    } catch(error) {
      console.error(error)
    }
  }


  async changeFields () {
    try {
      let bodyObj = {id : this.props.id}
        if (this.state.bufferTime !== ""){
          bodyObj.recoverTime = this.state.bufferTime
        }
        if (this.state.startTime !== ""){
          bodyObj.dayStart = this.state.startTime
        }
        if (this.state.endTime !== ""){
          bodyObj.dayEnd = this.state.endTime
        }
        if (parseInt(this.state.endTime) < parseInt(this.state.startTime)){
          Alert.alert(
            'Hmm...',
            'Your bedtime is earlier than your wakeup time - please fix this before proceeding!',
            { cancelable: true }
          )
        }
      console.log("STUFF IS HERE")
      console.log(this.props.token)
      console.log(bodyObj)
      let responseJSON
      const apiUrl = `${config.apiUrl}/users`
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.props.token,
        },
      body: JSON.stringify(bodyObj)
      })
      if (!response.ok) {
        console.log("Not Okay!")
        console.log(response)
        return false
      } else {
        Alert.alert(
          'Information Changed',
          'We have updated your profile!',
          { cancelable: true }
        )
        console.log("Okay!")
        console.log(response)
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
                onChangeText = {(value) => this.setState({startTime: value.replace(":", "")})}
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
                onChangeText = {(value) => this.setState({endTime: value.replace(":", "")})}
              />
            <Button
              text = 'Confirm'
              textColor = 'whiteLogOut'
              type = 'purple'
              onClick = {() => {this.changeFields() && this.fetchUserInfo() && this.handleClick()}}/>
          </View>
    )
  }

}

export default connect (mapStateToProps, mapDispatchToProps)(EditProfileScreen)