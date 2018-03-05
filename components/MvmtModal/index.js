import React, { Component } from 'react'
import { Text, View, Button, Modal, Image, StyleSheet } from 'react-native'
import styles from './styles'

import FilterHeader from '../../components/FilterHeader'
import FilterButton from '../../components/FilterButton'

export default class MvmtModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      sweat: "Medium",
      duration: 30,
      buttonColor: "#F2F2F2"
    }
  }

  changeTag (tag) {
    this.setState({ tags: [...this.state.tags, tag] })
    console.log("changeTag");
  }

  changeSweat (sweat) {
    this.setState({ sweat: sweat })
    console.log("changeSweat", this.state.sweat);
  } 

  changeDuration (duration) {
    this.setState({ duration: duration })
    console.log("changeDuration", this.state.duration);
  } 
  componentDidUpdate(prevProps, prevState) {
    console.log('**************',this.state.tags)
  }

  render(){
    
    return(
      <View style={styles.innerContainer}>

        <Text style={styles.title}>Filter Activities</Text>

        <FilterHeader headerProp="ACTIVITIES"/>
          <Button style = {{ flexDirection: row, justifyContent: 'space-between'}}
            title="Run"
            onPress={() => this.changeTag("Run")} />
          <Button style = {{ flexDirection: row, justifyContent: 'space-between'}}
            title="Row"
            onPress={() => this.changeTag("Row")} />
          <Button
            title="Bar"
            onPress={() => this.changeTag("Bar")} />

        <FilterHeader headerProp="SWEAT"/>
          <Button
            title="Low"
            onPress={() => this.changeSweat("Low")} />
          <Button
            title="Medium"
            onPress={() => this.changeSweat("Medium")} />
          <Button
            title="Hard"
            onPress={() => this.changeSweat("Hard")} />

        <FilterHeader headerProp="DURATION"/>
          <Button
            title="< 15 min"
            onPress={() => this.changeDuration(15)} />
          <Button
            title="< 30 min"
            onPress={() => this.changeDuration(30)} />
          <Button
            title="< 60 min"
            onPress={() => this.changeDuration(60)} />

      </View>
    )
  }
}
