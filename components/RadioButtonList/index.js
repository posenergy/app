import React, { Component, PropTypes } from "react"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import {
  Modal,
  View,
  Text,
  Image,
} from "react-native"
import styles from './styles'

var radio_props = [
  {label: 'param1', value: 0 },
  {label: 'param2', value: 1 }
];

export default class RadioButtonProject extends Component {
  state = {
    value: 0,
  };

render() {
    return (
      <View>
        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={(value) => {this.setState({value:value})}}
        />
      </View>
    )
  }
}
