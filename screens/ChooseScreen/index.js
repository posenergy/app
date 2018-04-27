import React from 'react'
import { Image, TouchableOpacity, Platform, View } from 'react-native'
import { connect } from 'react-redux'

import { mindVisibility } from '../../redux/actions/mindModalActions'
import { mvmtVisibility } from '../../redux/actions/mvmtModalActions'
import { del_all_tags } from '../../redux/actions/momentActions'
import { del_all_mvmt } from '../../redux/actions/mvmtButtonsActions'
import { del_all_mind } from '../../redux/actions/mindButtonsActions'
import { onboarding } from '../../redux/actions/userActions'

import styles from './styles'
import GenModal from '../../components/GenModal'

const mapStateToProps = state => ({
  user: state.userReducer,
  mind: state.toggleMindVisibility.visible,
  mvmt: state.toggleMvmtVisibility.visible,
})

const mapDispatchToProps = {
  del_all_tags,
  del_all_mvmt,
  del_all_mind,
  onboarding,
  mindVisibility,
  mvmtVisibility,
}

class ChooseScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genModalVisible: this.props.user.onboarding,
      genModalCounter: 1,
      genModalContent: {
        title: 'Welcome!',
        text: '[+energy] helps you discover wellness content and integrate it into your busy life by instantly adding chosen events to your calendar, and continually syncing with it.',
        bname: 'Next',
        image: <Image
                source= {require('../../images/slide1.png')}
                style={styles.modalIndex} />,
        modalCommand: this.nextModal,
      },
    }
  }

  nextModal = () => {
    let content = {}
    if(this.state.genModalCounter === 1) {
      content = {
        title: 'Welcome!',
        text: 'Click "Activities" to browse on demand content and then add it to your calendar. Start by choosing "Mindfulness" or "Movement."',
        bname: 'Next',
        image: <Image
                source= {require('../../images/slide2.png')}
                style={styles.modalIndex} />,
        modalCommand: this.nextModal,
      }
    } else if(this.state.genModalCounter === 2) {
      content = {
        title: 'Welcome!',
        text: 'Click "Calendar" to find availability and then browse activities. Click on open time slots to start scheduling!',
        bold: 'Ready to get planning?',
        bname: 'Let`s go!',
        image: <Image
                source= {require('../../images/slide3.png')}
                style={styles.modalIndex} />,
        modalCommand: this.closeModal,
      }
    }
    this.setState({
      genModalCounter: this.state.genModalCounter += 1,
      genModalContent: content,
    })
  }

  closeModal = () => {
    this.props.onboarding()
    this.setState({genModalVisible: false})
  }

  reduxProps = () => {
    this.props.del_all_tags()
    this.props.del_all_mvmt()
    this.props.del_all_mind()
    if (this.props.mind) {
      this.props.mindVisibility()
    }
    if (this.props.mvmt) {
      this.props.mvmtVisibility()
    }

  }

  render() {
    return(
      <View style={styles.viewStyle}>
        <TouchableOpacity style = {styles.mvmtTouch}
          onPress={(event) => {
          this.reduxProps()
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'movement'})
          }}>
          { Platform.isPad && <Image style={styles.mvmtPad} source={require('../src/mvmt.png')}/> }
          { !Platform.isPad && <Image style={styles.mvmt} source={require('../src/mvmt.png')}/> }
        </TouchableOpacity>

        <TouchableOpacity
          onPress={(event) => {
          this.reduxProps()
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'mindfulness'})
          }}>
          { Platform.isPad && <Image style={styles.mindPad} source={require('../src/mind.png')}/> }
          { !Platform.isPad && <Image style={styles.mind} source={require('../src/mind.png')}/> }
        </TouchableOpacity>
        {this.state.genModalVisible &&
          <GenModal
            {...this.state.genModalContent}
          />
        }
      </View>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseScreen)
