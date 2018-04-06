import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'
import PropTypes from 'prop-types'

// put sweats in a separate view, add flex to the entire thing so 
// that flexDirection is a row and flex-end puts the sweats at the end
// of the box

const Moment = ({icon, title, time, pict, sweat}) => (
	<View style={styles.iconAndMoment}>
		<View style={{ width: 45, height: 45 }}>
			<Image source={icon}/>
		</View>
		<View style={styles.moment}>
			<Text style={styles.momentTitle}> {title} </Text>
			<View style = {styles.textAndSweat}>
				<Text style={styles.momentTime}> {time} minutes </Text>
				{ (sweat == 0) && 
					<View style={styles.sweat}>
						<Image source={require('./src/sweat.png')}/>
					</View>
				}
				{ (sweat == 1) && 
					<View style={styles.sweat}>
						<Image source={require('./src/sweat.png')}/>
						<Image source={require('./src/sweat.png')}/>
					</View>
				}
				{ (sweat == 2) && 
					<View style={styles.sweat}>
						<Image source={require('./src/sweat.png')}/>
						<Image source={require('./src/sweat.png')}/>
						<Image source={require('./src/sweat.png')}/>
					</View>
				}
			</View>
		</View>
	</View>
)

Moment.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string,
	time: PropTypes.number,
	pict: PropTypes.string,
	sweat: PropTypes.number,
}

export default Moment
