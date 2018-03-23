import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

const Moment = ({title, time, pict, id}) => (
	<View style={styles.moment}>
		<Text style={styles.momentTitle}> {title} </Text>
		<Text style={styles.momentTime}> {time} minutes</Text>
		<Text style={styles.momentTime}> {id}</Text>
	</View>
)

Moment.propTypes = {
	title: PropTypes.string,
	time: PropTypes.number,
	pict: PropTypes.string,
	id: PropTypes.string,
}

export default Moment
