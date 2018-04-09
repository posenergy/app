import React from 'react'
import {ScrollView} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import styles from './styles'
import Button from '../../components/Button'

import BlackStyleTextInput from '../../components/BlackStyleTextInput'
import { persistor } from '../../redux/store'
import { token } from '../../redux/actions/tokenActions'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
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

  logout = () => {
    persistor.purge()
    this.props.navigation.dispatch(
      NavigationActions.reset({
        index: 0,
        key: null,
        actions: [ NavigationActions.navigate({ routeName: 'Landing' }) ],
      }))
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.view}
        showsVerticalScrollIndicator = {false} >
      <BlackStyleTextInput
        pholder={this.props.user.name}
        imagelink = {require('../../images/profileblack.png')}
        changeFunction={name => this.setState({name})}
        borderBottomColor= 'black'/>
      <BlackStyleTextInput
        pholder={this.props.user.email}
        imagelink = {require('../../images/mailblack.png')}
        changeFunction={email => this.setState({email})}/>
      <BlackStyleTextInput
        pholder='Password'
        imagelink = {require('../../images/lockblack.png')}
        changeFunction={password => this.setState({password})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder={this.props.user.buffer.toString()}
        imagelink = {require('../../images/buffertime.png')}
        changeFunction={buffertime => this.setState({buffertime})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder={this.props.user.startTime.toString()}
        imagelink = {require('../../images/sun.png')}
        changeFunction={wakeup => this.setState({wakeup})}
        passwordSecure={true}/>
      <BlackStyleTextInput
        pholder={this.props.user.endTime.toString()}
        imagelink = {require('../../images/night.png')}
        changeFunction={bedtime => this.setState({bedtime})}
        passwordSecure={true}/>
      <Button
        text = "Log Out"
        textcolor = "white"
        type = 'schedule'
        onClick = {() => {this.logout()}}>
      </Button>
      </ScrollView>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
