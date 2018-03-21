import React from 'react'
import { View, ImageBackground } from 'react-native'

import styles from './styles'

import AboutModal from '../../components/AboutModal'
import Button from '../../components/Button'

export default class AboutScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style = {styles.container}>
      <AboutModal/>
      </View>
    )
  }

}
