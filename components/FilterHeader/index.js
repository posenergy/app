import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const FilterHeader = ({ headerProp }) =>
	<View style={styles.border}>
		<Text style={styles.FilterHeader}> {headerProp} </Text>
	</View>

FilterHeader.propTypes = {
  headerProp: PropTypes.string,
}

export default FilterHeader
