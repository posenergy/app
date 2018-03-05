import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import styles from './styles'

import FilterHeader from '../../components/FilterHeader'

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
          <Button
            title='Run'
            onPress={() => this.changeTag('Craft')} />
          <Button
            title='Row'
            onPress={() => this.changeTag('Journal')} />
          <Button
            title='Bar'
            onPress={() => this.changeTag('Meditate')} />

        <FilterHeader headerProp='SWEAT'/>
          <Button
            title='Low'
            onPress={() => this.changeSweat('Low')} />
          <Button
            title='Medium'
            onPress={() => this.changeSweat('Medium')} />
          <Button
            title='Hard'
            onPress={() => this.changeSweat('Hard')} />

        <FilterHeader headerProp='DURATION'/>
          <Button
            title='< 15 min'
            onPress={() => this.changeDuration(15)} />
          <Button
            title='< 30 min'
            onPress={() => this.changeDuration(30)} />
          <Button
            title='< 60 min'
            onPress={() => this.changeDuration(60)} />

      </View>
    )
  }
}
