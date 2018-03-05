import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const Moment = ({title, time, pict}) => (
	<View style={styles.moment}>
		<Text style={styles.momentTitle}> {title} </Text>
		<Text style={styles.momentTime}> {time} minutes</Text>
	</View>
)

Moment.propTypes = {
	title: PropTypes.string,
	time: PropTypes.number,
	pict: PropTypes.string,
}

export default Moment
