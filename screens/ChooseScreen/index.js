import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'

import { mindVisibility } from '../../redux/actions/mindModalActions'
import { mvmtVisibility } from '../../redux/actions/mvmtModalActions'
import { del_all_tags } from '../../redux/actions/momentActions'
import { del_all_mvmt } from '../../redux/actions/mvmtButtonsActions'
import { del_all_mind } from '../../redux/actions/mindButtonsActions'

import styles from './styles'

const mapStateToProps = state => ({
  mind: state.toggleMindVisibility.visible,
  mvmt: state.toggleMvmtVisibility.visible,
})

const mapDispatchToProps = {
  del_all_tags,
  del_all_mvmt,
  del_all_mind,
  mindVisibility,
  mvmtVisibility,
}

class ChooseScreen extends React.Component {

  reduxProps = () => {
    this.props.del_all_tags()
    this.props.del_all_mvmt()
    this.props.del_all_mind()
    if (this.props.mind) {
      this.props.mindVisibility()
    }
    if (this.props.mvmt) {
      this.props.mvmtVisibility()
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ChooseScreen)
