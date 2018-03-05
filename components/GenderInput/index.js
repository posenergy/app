import React, { Component } from 'react'
import { Dropdown } from 'react-native-material-dropdown'
import styles from './styles'

class GenderInput extends Component {
  render() {
    const data = [{
      value: 'Male',
    }, {
      value: 'Female',
    }, {
      value: 'Other',
    }]

    return (
      <Dropdown
        style={styles.Picker}
        label='Gender'
        data={data}
        baseColor='#F2F2F2'
        labelFontSize = {22}
      />
    )
  }
}


export default GenderInput
