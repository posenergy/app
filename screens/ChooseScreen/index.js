import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { del_all_tags } from '../../redux/actions/momentActions'
import { del_all_mvmt } from '../../redux/actions/mvmtButtonsActions'
import { del_all_mind } from '../../redux/actions/mindButtonsActions'

import styles from './styles'

const mapDispatchToProps = {
  del_all_tags,
  del_all_mvmt,
  del_all_mind,
}

class ChooseScreen extends React.Component {

  reduxProps = () => {
    this.props.del_all_tags()
    this.props.del_all_mvmt()
    this.props.del_all_mind()
  }

  render() {
    return(
      <View style={styles.viewStyle}>

        <TouchableOpacity style = {styles.mvmtTouch}
          onPress={(event) => {
          this.reduxProps()
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'movement'})
          }}>
          <Image style={styles.mvmt} source={require('../src/mvmt.png')}/>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={(event) => {
          this.reduxProps()
          const { navigate } = this.props.navigation
          navigate('Search', {category: 'mindfulness'})
          }}>
          <Image style={styles.mind} source={require('../src/mind.png')}/>
        </TouchableOpacity>

      </View>

    )
  }
}

export default connect(null, mapDispatchToProps)(ChooseScreen)
