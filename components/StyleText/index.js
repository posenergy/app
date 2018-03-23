import React from 'react'
import { View, Text} from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const StyleText = ({text}) => (
  <View
  style = {styles.viewStyle}>
  <Text style = {styles.title}>
  {text}
  </Text>
  </View>
)

StyleText.propTypes = {
  text: PropTypes.string,
}

export default StyleText
