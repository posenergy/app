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

  getHour(time) {
    let hours = time.substr(0, 2)
    let mins = time.substr(2, 4)
    return hours + ':' + mins
  }

  getMins(minutes) {
    return minutes + ' minutes'
  }

  resetNavigation(targetRoute) {
     const navigateAction = NavigationActions.reset({
       index: 0,
       actions: [ NavigationActions.navigate({ routeName: targetRoute }) ],
     })
     this.props.navigation.dispatch(navigateAction)
   }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.view}
        showsVerticalScrollIndicator = {false} >
      <BlackStyleTextInput
        pholder={this.props.user.name}
        sub={'NAME'}
        imagelink = {require('../../images/profileblack.png')}
        borderBottomColor= 'black'/>
      <BlackStyleTextInput
        pholder={this.props.user.email}
        sub={'EMAIL'}
        imagelink = {require('../../images/mailblack.png')}/>
      <BlackStyleTextInput
        pholder={this.getMins(this.props.user.buffer.toString())}
        sub={'RECOVERY TIME'}
        imagelink = {require('../../images/buffertime.png')}/>
      <BlackStyleTextInput
        pholder={this.getHour(this.props.user.startTime.toString())}
        sub={'START TIME'}
        imagelink = {require('../../images/sun.png')}/>
      <BlackStyleTextInput
        pholder={this.getHour(this.props.user.endTime.toString())}
        sub={'END TIME'}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
