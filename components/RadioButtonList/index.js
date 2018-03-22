import React, { Component} from 'react'
import RadioForm from 'react-native-simple-radio-button'
import {
  View,
} from 'react-native'
import styles from './styles'


export default class RadioButtonProject extends Component {
  state = {
    value: 0,
  };

render() {
    return (
      <View>
        <RadioForm
          radio_props={this.props.radioprops}
          initial={0}
          style={styles.form}
          buttonColor={'black'}
          buttonInnerColor = {'black'}
          onPress={(value) => {this.setState({value: value})}}
        />
      </View>
    )
  }
}
