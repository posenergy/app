import React, { Component } from 'react'
import { Modal, Text, View, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

import { del_tag, add_tag, sweat, duration } from '../../redux/actions/momentActions'
import { mvmtVisibility } from '../../redux/actions/mvmtModalActions'
import { barAction, danceAction, hiitAction, pilatesAction, runAction, strengthAction,
        stretchAction, yogaAction, lowAction, mediumAction, highAction,
        fifteenAction, thirtyAction, sixtyAction } from '../../redux/actions/mvmtButtonsActions'

import Button from '../../components/Button'
import ModalStyleText from '../../components/ModalStyleText'
import FilterButton from '../../components/FilterButton'

const mapStateToProps = state => ({
  tags: state.tags,
  duration: state.duration,
  bar: state.toggleMvmtButtons.bar,
  dance: state.toggleMvmtButtons.dance,
  hiit: state.toggleMvmtButtons.hiit,
  pilates: state.toggleMvmtButtons.pilates,
  run: state.toggleMvmtButtons.run,
  strength: state.toggleMvmtButtons.strength,
  stretch: state.toggleMvmtButtons.stretch,
  yoga: state.toggleMvmtButtons.yoga,
  low: state.toggleMvmtButtons.low,
  medium: state.toggleMvmtButtons.medium,
  high: state.toggleMvmtButtons.high,
  fifteen: state.toggleMvmtButtons.fifteen,
  thirty: state.toggleMvmtButtons.thirty,
  sixty: state.toggleMvmtButtons.sixty,
})

const mapDispatchToProps = {
  del_tag,
  add_tag,
  sweat,
  duration,
  mvmtVisibility,
  barAction,
  danceAction,
  hiitAction,
  pilatesAction,
  runAction,
  strengthAction,
  stretchAction,
  yogaAction,
  lowAction,
  mediumAction,
  highAction,
  fifteenAction,
  thirtyAction,
  sixtyAction,
}

class MvmtModal extends Component {

  buttonClicked = () => {
    this.props.mvmtVisibility()
  }

  buttonRun = (tag) => {
    this.props.runAction()

    if (this.props.run) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonStrength = (tag) => {
    this.props.strengthAction()

    if (this.props.strength) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonStretch = (tag) => {
    this.props.stretchAction()

    if (this.props.stretch) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonHiit = (tag) => {
    this.props.hiitAction()

    if (this.props.hiit) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonDance = (tag) => {
    this.props.danceAction()

    if (this.props.dance) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonPilates = (tag) => {
    this.props.pilatesAction()

    if (this.props.pilates) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonBar = (tag) => {
    this.props.barAction()

    if (this.props.bar) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonYoga = (tag) => {
    this.props.yogaAction()

    if (this.props.yoga) {
      this.props.del_tag(tag)
    } else {
      this.props.add_tag(tag)
    }
  }

  buttonLow = (drip) => {
    this.props.lowAction()
    this.props.sweat(drip)
  }

  buttonMed = (drip) => {
    this.props.mediumAction()
    this.props.sweat(drip)
  }

  buttonHigh = (drip) => {
    this.props.highAction()
    this.props.sweat(drip)
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
      <View backgroundColor='transparent' style={styles.Container}>
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
                onPress={() => this.props.mvmtVisibility()}>
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
                    titleProp='Barre'
                    typeProp={ this.props.bar ? 'filterClick' : 'filter' }
                    width={57}
                    textColor={ this.props.bar ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonBar('Bar')} />
                  <FilterButton
                    titleProp='Dance'
                    typeProp={ this.props.dance ? 'filterClick' : 'filter' }
                    width={74}
                    textColor={ this.props.dance ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonDance('Dance')} />
                 <FilterButton
                    titleProp='HIIT'
                    typeProp={ this.props.hiit ? 'filterClick' : 'filter' }
                    width={57}
                    textColor={ this.props.hiit ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonHiit('Hiit')} />
                  <FilterButton
                    titleProp='Pilates'
                    typeProp={ this.props.pilates ? 'filterClick' : 'filter' }
                    width={77}
                    textColor={ this.props.pilates ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonPilates('Pilates')} />
                </View>
                <View style={styles.buttons}>
                  <FilterButton
                    titleProp='Run'
                    typeProp={ this.props.run ? 'filterClick' : 'filter' }
                    width={54}
                    textColor={ this.props.run ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonRun('Run')} />
                  <FilterButton
                    titleProp='Strength'
                    typeProp={ this.props.strength ? 'filterClick' : 'filter' }
                    width={81}
                    textColor={ this.props.strength ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonStrength('Strength')} />
                  <FilterButton
                    titleProp='Stretch'
                    typeProp={ this.props.stretch ? 'filterClick' : 'filter' }
                    width={82}
                    textColor={ this.props.stretch ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonStretch('Stretch')} />
                  <FilterButton
                    titleProp='Yoga'
                    typeProp={ this.props.yoga ? 'filterClick' : 'filter' }
                    width={52}
                    textColor={ this.props.yoga ? 'white' : 'blacksmall'}
                    onPressProp={() => this.buttonYoga('Yoga')} />
                </View>
              </View>
              <View marginBottom= {30}>
                <ModalStyleText text='SWEAT'/>
                <View style={styles.buttons}>
                       <FilterButton
                         titleProp='Low'
                         typeProp={ this.props.low ? 'filterClick' : 'filter' }
                         width={77.2}
                         textColor={ this.props.low ? 'white' : 'blacksmall'}
                         onPressProp={() => this.buttonLow(0)} />
                       <FilterButton
                         titleProp='Medium'
                         typeProp={ this.props.medium ? 'filterClick' : 'filter' }
                         width={107.6}
                         textColor={ this.props.medium ? 'white' : 'blacksmall'}
                         onPressProp={() => this.buttonMed(1)} />
                       <FilterButton
                         titleProp='High'
                         typeProp={ this.props.high ? 'filterClick' : 'filter' }
                         width={91.9}
                         textColor={ this.props.high ? 'white' : 'blacksmall'}
                         onPressProp={() => this.buttonHigh(2)} />
                     </View>
              </View>
              <View marginBottom= {60}>
                <ModalStyleText text='DURATION'/>
                <View style={styles.buttons}>
                  <FilterButton
                    titleProp='< 15 min'
                    typeProp={ this.props.fifteen ? 'filterClick' : 'filter' }
                    width={94}
                    textColor={ this.props.fifteen ? 'white' : 'blacksmall'}
                    marginRight={6}
                    onPressProp={() => this.buttonFifteen(15)} />
                  <FilterButton
                    titleProp='< 30 min'
                    typeProp={ this.props.thirty ? 'filterClick' : 'filter' }
                    width={94}
                    textColor={ this.props.thirty ? 'white' : 'blacksmall'}
                    marginRight={6}
                    onPressProp={() => this.buttonThirty(30)} />
                  <FilterButton
                    titleProp='< 60 min'
                    typeProp={ this.props.sixty ? 'filterClick' : 'filter' }
                    width={94}
                    textColor={ this.props.sixty ? 'white' : 'blacksmall'}
                    marginRight={6}
                    onPressProp={() => this.buttonSixty(60)} />
                </View>
              </View>
            <Button
              justifyContent= 'flex-end'
              type ='mindmodal'
              onClick={() => {this.buttonClicked()}}
              text = 'Apply'/>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MvmtModal)
