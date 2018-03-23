import React, { Component } from 'react'
import { Modal, Text, View } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

import { del_tag, add_tag, duration } from '../../redux/actions/momentActions'
import { mindVisibility } from '../../redux/actions/mindModalActions'
import { craftAction, journalAction, meditateAction, gratitudeAction,
        skinAction, inspiredAction, fifteenAction, thirtyAction,
        sixtyAction } from '../../redux/actions/mindButtonsActions'

import Button from '../../components/Button'
import FilterButton from '../../components/FilterButton'
import StyleText from '../../components/StyleText'

const mapStateToProps = state => ({
  craft: state.toggleMindButtons.craft,
  journal: state.toggleMindButtons.journal,
  meditate: state.toggleMindButtons.meditate,
  gratitude: state.toggleMindButtons.gratitude,
  skin: state.toggleMindButtons.skin,
  inspired: state.toggleMindButtons.inspired,
  fifteen: state.toggleMindButtons.fifteen,
  thirty: state.toggleMindButtons.thirty,
  sixty: state.toggleMindButtons.sixty,
})

const mapDispatchToProps = {
  del_tag,
  add_tag,
  duration,
  mindVisibility,
  craftAction,
  journalAction,
  meditateAction,
  gratitudeAction,
  skinAction,
  inspiredAction,
  fifteenAction,
  thirtyAction,
  sixtyAction,
}

class MindModal extends Component {

  buttonCraft = (tag) => {
    this.props.craftAction()

    if (this.props.craft) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonJournal = (tag) => {
    this.props.journalAction()

    if (this.props.journal) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonMeditate = (tag) => {
    this.props.meditateAction()

    if (this.props.meditate) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonFifteen = (time) => {
    this.props.fifteenAction()
    this.props.duration(time)
  }

  buttonThirty = (time) => {
    this.props.thirtyAction()
    this.props.duration(time)
  }

  buttonSixty = (time) => {
    this.props.sixtyAction()
    this.props.duration(time)
  }

  render() {
    return(
      <View style={styles.Container}>
        <Modal
          animationType={'slide'}>
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>

              <Text style={styles.title}>Filter Activities</Text>

              <StyleText text='ACTIVITIES'/>
              <View style={styles.buttons}>
                <FilterButton
                  titleProp='Craft'
                  onPressProp={() => {this.buttonCraft('Craft')}} />
                <FilterButton
                  titleProp='Journal'
                  onPressProp={() => {this.buttonJournal('Journal')}} />
                <FilterButton
                  titleProp='Meditate'
                  onPressProp={() => {this.buttonMeditate('Meditate')}} />
              </View>

              <StyleText text='DURATION'/>
              <View style={styles.buttons}>
                <FilterButton
                  titleProp='< 15 min'
                  onPressProp={() => {this.buttonFifteen(16)}} />
                <FilterButton
                  titleProp='< 30 min'
                  onPressProp={() => {this.buttonThirty(30)}} />
                <FilterButton
                  titleProp='< 60 min'
                  onPressProp={() => {this.buttonSixty(61)}} />
              </View>
            </View>
            <Button
              type='login'
              style={styles.button}
              onClick={() => this.props.mindVisibility()}
              text= 'Apply'
            />
          </View>
        </Modal>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MindModal)
