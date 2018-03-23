import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import GenModal from '../components/GenModal'

import { first_mod, sec_mod, third_mod } from '../../redux/actions/boardAction'

const mapStateToProps = state => ({
  first: state.boardModals.first,
  second: state.boardModals.second,
  third: state.boardModals.third,
})

const mapDispatchToProps = {
  first_mod,
  sec_mod,
  third_mod,
}

class OnboardingScreen extends React.Component {

  firstFunc = () => {
    this.props.first_mod()
    this.props.sec_mod()
  }

  secFunc = () => {
    this.props.sec_mod()
    this.props.third_mod()
  }

  render() {
    return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {this.props.first && <GenModal
      title = "Welcome!"
      text = "[+energy] helps you discover wellness content and integrate it into your busy life by instantly adding chosen events to your calendar, and continually syncing with it."
      bname = "Next"
      isVisible={this.state.modal1Visible}
      click = '() => this.firstFunc()'
      image = {require('../images/slide1.png')}
      />}
      {this.props.second && <GenModal
      title = "Welcome!"
      text = "Click 'Activities' to browse on demand content and then add it to your calendar. Start by choosing 'Mindfulness' or 'Movement.'"
      bname = "Next"
      bold = "Ready to get planning?"
      isVisible={this.state.modal2Visible}
      click = '() => this.secFunc()'
      image = {require('../images/slide2.png')}
      />}
      {this.props.third && <GenModal
      title = "Welcome!"
      text = "Click 'Calendar' to find availability and then browse activities. Click on open time slots to start scheduling!"
      isVisible={this.state.modal3Visible}
      click = '() => this.props.third_mod()'
      bname = "Let's go!"
      image = {require('../images/slide3.png')}
      />}
    </View>
	)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen)


