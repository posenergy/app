import React from 'react'
import {ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import styles from './styles'
import Button from '../../components/Button'

import BlackStyleTextInput from '../../components/BlackStyleTextInput'
import { persistor } from '../../redux/store'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
})

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bufferTime: this.props.user.buffer.toString(),
      startTime: this.props.user.startTime.toString(),
      endTime: this.props.user.endTime.toString(),
    }
  }

  logout = () => {
    persistor.purge()
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [ NavigationActions.navigate({ routeName: 'Landing' }) ],
      }))
  }

  getHour(time) {
    let hours = time.substr(0, 2)
    let mins = time.substr(2, 4)
    return hours + ':' + mins
  }

  getMins(minutes) {
    return minutes + ' minutes'
  }

  componentWillMount() {
    if(this.props.token === '' || typeof this.props.token !== String) {
      this.props.navigation.dispatch(
        NavigationActions.reset({
          index: 0,
          key: null,
          actions: [ NavigationActions.navigate({ routeName: 'Landing' }) ],
        }))
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.view}
        alignItems='center'
        showsVerticalScrollIndicator = {false} >
      <BlackStyleTextInput
        pholder={this.props.user.name}
        linked={false}
        sub={'NAME'}
        imagelink = {require('../../images/profileblack.png')}
        borderBottomColor= 'black'/>
      <BlackStyleTextInput
        pholder={this.props.user.email}
        sub={'EMAIL'}
        linked={false}
        imagelink = {require('../../images/mailblack.png')}/>
      <BlackStyleTextInput
        pholder={this.getMins(this.props.user.buffer.toString())}
        sub={'RECOVERY TIME'}
        linked={true}
        onPress={(event) => {
                    const {navigate} = this.props.navigation
                    navigate('EditProfile', {
                      bufferTime: this.getMins(this.state.bufferTime),
                      startTime: this.state.startTime,
                      endTime: this.state.endTime,
                    })
                  }}
        imagelink = {require('../../images/buffertime.png')}/>
      <BlackStyleTextInput
        pholder={this.getHour(this.props.user.startTime.toString())}
        sub={'START TIME'}
        linked={true}
        onPress={(event) => {
                    const {navigate} = this.props.navigation
                    navigate('EditProfile', {
                      bufferTime: this.getMins(this.state.bufferTime),
                      startTime: this.state.startTime,
                      endTime: this.state.endTime,
                    })
                  }}
        imagelink = {require('../../images/sun.png')}/>
      <BlackStyleTextInput
        pholder={this.getHour(this.props.user.endTime.toString())}
        sub={'END TIME'}
        linked={true}
        onPress={(event) => {
                    const {navigate} = this.props.navigation
                    navigate('EditProfile', {
                      bufferTime: this.getMins(this.state.bufferTime),
                      startTime: this.state.startTime,
                      endTime: this.state.endTime,
                    })
                  }}
        imagelink = {require('../../images/night.png')}
        marginBottom={0} />
      <Button
        text = 'Log Out'
        textColor = 'whiteLogOut'
        type = 'purple'
        onClick = {() => {this.logout()}}>
      </Button>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, null)(ProfileScreen)
