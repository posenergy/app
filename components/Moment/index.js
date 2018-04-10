import { Image, Text, View } from 'react-native'

import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'

const Moment = ({ icon, brand, pict, sweat, title, time }) => (
  <View style={styles.iconAndMoment}>
    <View>
      {icon === '../src/journalIcon.png' &&
        <Image style={{ width: 40, height: 40, marginLeft: 23, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/journalIcon.png')} />}
      {icon === '../src/yogaIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/yogaIcon.png')} />}
      {icon === '../src/danceIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/danceIcon.png')} />}
      {icon === '../src/strengthIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/strengthIcon.png')} />}
      {icon === '../src/hiitIcon.png' &&
        <Image style={{ width: 50, height: 50, marginLeft: 18, marginTop: 20, marginRight: 0 }}
          source={require('../../screens/src/hiitIcon.png')} />}
      {icon === '../src/barreIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/barreIcon.png')} />}
      {icon === '../src/runIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/runIcon.png')} />}
      {icon === '../src/streching_Icon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/stretching_Icon.png')} />}
      {icon === '../src/pilatesIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/pilatesIcon.png')} />}
      {icon === '../src/craftIcon.png' &&
        <Image style={{ width: 50, height: 50, marginLeft: 18, marginTop: 20, marginRight: 0 }}
          source={require('../../screens/src/craftIcon.png')} />}
      {icon === '../src/getInspiredIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/getInspiredIcon.png')} />}
      {icon === '../src/gratitudeIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/gratitudeIcon.png')} />}
      {icon === '../src/meditateIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/meditateIcon.png')} />}
      {icon === '../src/skinCareIcon.png' &&
        <Image style={{ width: 45, height: 45, marginLeft: 20, marginTop: 23, marginRight: 0 }}
          source={require('../../screens/src/skinCareIcon.png')} />}
    </View>
    <View style={styles.moment}>
      <Text style={styles.momentTitle}> {title} </Text>
      <Text style={styles.momentTime}> {time} minutes</Text>
      <View style={styles.textAndSweat}>
        <Text style={styles.momentTime}> {brand}</Text>
        {(sweat === 0) &&
          <View style={styles.sweat}>
            <Image source={require('./src/sweat.png')} />
          </View>
        }
        {(sweat === 1) &&
          <View style={styles.sweat}>
            <Image source={require('./src/sweat.png')} />
            <Image source={require('./src/sweat.png')} />
          </View>
        }
        {(sweat === 2) &&
          <View style={styles.sweat}>
            <Image source={require('./src/sweat.png')} />
            <Image source={require('./src/sweat.png')} />
            <Image source={require('./src/sweat.png')} />
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
  brand: PropTypes.string,
}

export default Moment
