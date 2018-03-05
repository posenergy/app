import React from 'react'
import { Button, Text, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class FilterButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      buttonColor: "#F2F2F2"
    }
  }

  onButtonPress = () => {
    if (this.buttonColor == "#F2F2F2") {
      this.setState({ buttonColor: "545680" })
    }
    else { this.setState({ buttonColor: "#F2F2F2" })}; 
  }

  changeTag (tag) {
    this.setState((state) => {
      tags: [state.tags, tag]
    });
  }

  changeSweat (sweat) {
    this.setState({ sweat: sweat });
  } 

  changeDuration (duration) {
    this.setState({ duration: duration})
  } 

  render(){
    return(
      <Button
        style={styles.FilterButton}
        title={this.props.titleProp}
        onPress={this.props.onPressProp}
        color={this.state.buttonColor}
      />
    )
  }
}
