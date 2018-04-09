import React, { Component } from 'react'
import { Modal, Text, View, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import styles from './styles'

import { del_tag, add_tag, duration } from '../../redux/actions/momentActions'
import { mindVisibility } from '../../redux/actions/mindModalActions'
import { craftAction, journalAction, meditateAction, gratitudeAction,
        skinAction, inspiredAction, fifteenAction, thirtyAction,
        sixtyAction } from '../../redux/actions/mindButtonsActions'

import Button from '../../components/Button'
import FilterButton from '../../components/FilterButton'
import ModalStyleText from '../../components/ModalStyleText'

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

  buttonGratitude = (tag) => {
    this.props.gratitudeAction()

    if (this.props.gratitude) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonSkin = (tag) => {
    this.props.skinAction()

    if (this.props.skin) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonInspired = (tag) => {
    this.props.inspiredAction()

    if (this.props.inspired) {
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
      <View backgroundColor= 'transparent' style={styles.Container}>
        <Modal
          transparent={true}
          blurRadius={1}
          style={styles.modal}
          animationType={'slide'}>
          <View backgroundColor= 'transparent' style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <TouchableOpacity
                activeOpacity = { 0.5 }
                style={styles.opacity}
                onPress={() => this.props.mindVisibility()}>
                <Image
                source={require('../../images/cancel.png')}
                style={styles.image}/>
              </TouchableOpacity>
              <View style={styles.filteract}>
                <Image
                  source={require('../../images/filter.png')}
                  style={styles.imageheader}/>
                <Text alignSelf='center' justifyContent='flex-start' fontSize={16} lineHeight={29}>
                Filter Activities
                </Text>
              </View>
              <View style={styles.bigview}>
                <ModalStyleText text='ACTIVITIES'/>
                <View style={styles.buttons}>
                  <FilterButton
                    titleProp='Craft'
                    width={136}
                    onPressProp={() => {this.buttonCraft('Craft')}} />
                  <FilterButton
                    titleProp='Journal'
                    width={149}
                    onPressProp={() => {this.buttonJournal('Journal')}} />
                </View>
                <View style={styles.buttons}>
                  <FilterButton
                    titleProp='Meditate'
                    width={117}
                    onPressProp={() => {this.buttonMeditate('Meditate')}} />
                  <FilterButton
                    titleProp='Show Gratitude'
                    width={168}
                    onPressProp={() => {this.buttonGratitude('Gratitude')}} />
                </View>
                <View style={styles.buttons}>
                  <FilterButton
                    titleProp='Skin Care'
                    width={129}
                    onPressProp={() => {this.buttonSkin('Skin')}} />
                  <FilterButton
                    titleProp='Get Inspired'
                    width={154}
                    onPressProp={() => {this.buttonInspired('Inspired')}} />
                </View>
              </View>
              <View marginBottom= {100}>
                <ModalStyleText text='DURATION'/>
                <View style={styles.buttons}>
                  <FilterButton
                    titleProp='< 15 min'
                    width={94}
                    marginRight={6}
                    onPressProp={() => {this.buttonFifteen(16)}} />
                  <FilterButton
                    titleProp='< 30 min'
                    width={94}
                    marginRight={6}
                    onPressProp={() => {this.buttonThirty(30)}} />
                  <FilterButton
                    titleProp='< 60 min'
                    width={94}
                    marginRight={6}
                    onPressProp={() => {this.buttonSixty(61)}} />
                </View>
              </View>
            <Button
              justifyContent= 'flex-end'
              type ='mindmodal'
              onClick={() => this.props.mindVisibility()}
              text = 'Apply'/>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MindModal)
