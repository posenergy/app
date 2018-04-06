import React, { Component } from 'react'
import { Modal, Text, View } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'

import { del_tag, add_tag, sweat, duration } from '../../redux/actions/momentActions'
import { mvmtVisibility } from '../../redux/actions/mvmtModalActions'
import { barAction, cycleAction, danceAction, hiitAction,
        kickAction, pilatesAction, rowAction, runAction, strengthAction,
        stretchAction, yogaAction, lowAction, mediumAction, highAction,
        fifteenAction, thirtyAction, sixtyAction } from '../../redux/actions/mvmtButtonsActions'

import Button from '../../components/Button'
import StyleText from '../../components/StyleText'
import FilterButton from '../../components/FilterButton'

const mapStateToProps = state => ({
  tags: state.tags,
  duration: state.duration,
  bar: state.toggleMvmtButtons.bar,
  cycle: state.toggleMvmtButtons.cycle,
  dance: state.toggleMvmtButtons.dance,
  hiit: state.toggleMvmtButtons.hiit,
  kick: state.toggleMvmtButtons.kick,
  pilates: state.toggleMvmtButtons.pilates,
  row: state.toggleMvmtButtons.row,
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
  cycleAction,
  danceAction,
  hiitAction,
  kickAction,
  pilatesAction,
  rowAction,
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

  buttonRow = (tag) => {
    this.props.rowAction()

    if (this.props.row) {
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

  buttonGen = (tag) => {
    let str = "this.props."+ tag + "Action()"
    let str1 = "this.props."+ tag
    console.log(this.props[str], str)
    console.log(this.props[tag], tag, "######")
    eval(str)
    // window["this"]["props"][tag]["Action"]();
    if (eval(str1)){
      this.props.del_tag(tag)
    } else {
      this.props.add_tag('Yoga')
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
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     tags: [],
  //     sweat: 'Medium',
  //     duration: 30,
  //     buttonColor: '#F2F2F2',
  //   }
  // }

  // changeTag(tag) {
  //   this.setState({tags: [...this.state.tags, tag]})
  // }

  // changeSweat(sweat) {
  //   this.setState({ sweat: sweat })
  // }

  // changeDuration(duration) {
  //   this.setState({ duration: duration})
  // }
 
  // componentDidUpdate(prevProps, prevState) {
  // }

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
                  titleProp='Run'
                  onPressProp={() => this.buttonRun('Run')} />
                <FilterButton
                  titleProp='Row'
                  onPressProp={() => this.buttonRow('Row')} />
                <FilterButton
                  titleProp='Bar'
                  onPressProp={() => this.buttonBar('Bar')} />
                <FilterButton
                  titleProp='Yoga'
                  onPressProp={() => this.buttonYoga('Yoga')} />
              </View>

              <StyleText text='SWEAT'/>
              <View style={styles.buttons}>
                <FilterButton
                  titleProp='Low'
                  onPressProp={() => this.buttonLow(0)} />
                <FilterButton
                  titleProp='Medium'
                  onPressProp={() => this.buttonMed(1)} />
                <FilterButton
                  titleProp='High'
                  onPressProp={() => this.buttonHigh(2)} />
              </View>

              <StyleText text='DURATION'/>
              <View style={styles.buttons}>
                <FilterButton
                  titleProp='< 15 min'
                  onPressProp={() => this.buttonFifteen(15)} />
                <FilterButton
                  titleProp='< 30 min'
                  onPressProp={() => this.buttonThirty(30)} />
                <FilterButton
                  titleProp='< 60 min'
                  onPressProp={() => this.buttonSixty(60)} />
              </View>
              <Button
                type='login'
                style={styles.button}
                onClick={() => {this.buttonClicked()}}
                text= 'Apply'
              />
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MvmtModal)
