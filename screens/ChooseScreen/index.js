import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { del_all_tags } from '../../redux/actions/momentActions'
import { del_all_mvmt } from '../../redux/actions/mvmtButtonsActions'
import { del_all_mind } from '../../redux/actions/mindButtonsActions'

import styles from './styles'
import GenModal from '../../components/GenModal'

const mapDispatchToProps = {
  del_all_tags,
  del_all_mvmt,
  del_all_mind,
}

class ChooseScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genModalVisible: true,
      // genModalVisible: this.props.navigation.state.params.genModalVisible,
      genModalCounter: 1,
      genModalContent: {
        title: "Welcome!",
        text: "[+energy] helps you discover wellness content and integrate it into your busy life by instantly adding chosen events to your calendar, and continually syncing with it.",
        bname: "Next",
        image: () => {require('../../images/slide1.png')},
        modalCommand: this.nextModal,
      }
    }
  }

  nextModal = () => {
    //(this.state && this.state.genModalCounter == 3) ? this.closeModal: this.nextModal,
    let content={}
    if(this.state.genModalCounter == 1) {
      content = {
        title: "Welcome!",
        text: "Click 'Activities' to browse on demand content and then add it to your calendar. Start by choosing 'Mindfulness' or 'Movement.'",
        bname: "Next",
        bold: "Ready to get planning?",
        image: () => {require('../../images/slide2.png')},
        modalCommand: this.nextModal,
      }
    }
    else if(this.state.genModalCounter == 2) {
      content = {
        title: "Welcome!",
        text: "Click 'Calendar' to find availability and then browse activities. Click on open time slots to start scheduling!",
        bname: "Let's go!",
        image: () => {require('../../images/slide3.png')},
        modalCommand: this.closeModal,
      }
    }
    this.setState({
      genModalCounter: this.state.genModalCounter += 1,
      genModalContent: content,
    })
  }

  closeModal = () => {
    this.setState({genModalVisible: false})
  }

  render() {
    this.props.del_all_tags()
    this.props.del_all_mvmt()
    this.props.del_all_mind()
    return(
      <View style={styles.viewStyle}>
        <TouchableOpacity style = {styles.mvmtTouch}
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'movement'})
          }}>
          <Image style={styles.mvmt} source={require('../src/mvmt.png')}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={(event) => {
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'mindfulness'})
          }}>
          <Image style={styles.mind} source={require('../src/mind.png')}/>
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

export default connect(null, mapDispatchToProps)(ChooseScreen)
