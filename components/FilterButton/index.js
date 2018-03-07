import React from 'react'
import { Button } from 'react-native'
import styles from './styles'

export default class FilterButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      buttonColor: '#F2F2F2',
      tags: [],
    }
  }

  render() {
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
