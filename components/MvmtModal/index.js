import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

import FilterHeader from '../../components/FilterHeader'
import FilterButton from '../../components/FilterButton'

export default class MvmtModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      sweat: 'Medium',
      duration: 30,
      buttonColor: '#F2F2F2',
    }
  }

  changeTag(tag) {
    this.setState({tags: [...this.state.tags, tag]})
  }

  changeSweat(sweat) {
    this.setState({ sweat: sweat })
  }

  changeDuration(duration) {
    this.setState({ duration: duration})
  }
 
  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return(
      <View style={styles.innerContainer}>

        <Text style={styles.title}>Filter Activities</Text>

        <FilterHeader headerProp='ACTIVITIES'/>
        <View style={styles.buttons}>
          <FilterButton
            titleProp='Run'
            onPressProp={() => this.changeTag('Run')} />
          <FilterButton
            titleProp='Row'
            onPressProp={() => this.changeTag('Row')} />
          <FilterButton
            titleProp='Bar'
            onPressProp={() => this.changeTag('Bar')} />
        </View>

        <FilterHeader headerProp='SWEAT'/>
        <View style={styles.buttons}>
          <FilterButton
            titleProp='Low'
            onPressProp={() => this.changeSweat('Low')} />
          <FilterButton
            titleProp='Medium'
            onPressProp={() => this.changeSweat('Medium')} />
          <FilterButton
            titleProp='Hard'
            onPressProp={() => this.changeSweat('Hard')} />
        </View>

        <FilterHeader headerProp='DURATION'/>
        <View style={styles.buttons}>
          <FilterButton
            titleProp='< 15 min'
            onPressProp={() => this.changeDuration(15)} />
          <FilterButton
            titleProp='< 30 min'
            onPressProp={() => this.changeDuration(30)} />
          <FilterButton
            titleProp='< 60 min'
            onPressProp={() => this.changeDuration(60)} />
        </View>
        
      </View>
    )
  }
}
