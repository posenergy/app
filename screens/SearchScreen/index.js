import React from 'react'
import { Modal, FlatList, View } from 'react-native'

import config from '../../config/config'
import styles from './styles'

import { mindVisibility } from '../../redux/actions/mindModalActions'
import { mvmtVisibility } from '../../redux/actions/mvmtModalActions'
import { connect } from 'react-redux'

import Button from '../../components/Button'
import Moment from '../../components/Moment'
import MvmtModal from '../../components/MvmtModal'
import MindModal from '../../components/MindModal'

// map state to props is called everytime the store is updated
// REDUX: TWO VISIBILITY FUNCTIONS -> one for mindmodal, one for mvmtmodal

const mapStateToProps = state => ({
  visible: state.visible,
})

const mapDispatchToProps = {
  mindVisibility,
  mvmtVisibility,
}

class SearchScreen extends React.Component {

  buttonClickedMind = () => {
    this.props.mindVisibility(true)
  }

  buttonClickedMvmt = () => {
    this.props.mvmtVisibility(true)
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Search',
  })

  constructor(props) {
    super(props)

    this.state = {
      category: this.props.navigation.state.params.category,
    }
  }

  // setModalVisible(visible) {
  //   this.setState({modalVisible: visible})
  // }

  componentDidUpdate(prevProps, prevState){console.log("componentDidUpdate",this.props.visible)}

  componentDidMount() {
    return fetch(config.apiUrl + '/moments/search/cat/?cat=' + this.state.category)
      .then((res) => res.json())
      .then(res => {
        this.setState({
          moments: res,
          modalVisible: false,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    if (this.state.category === 'Movement') {
      return (
        <View style={styles.viewStyle}>
          <FlatList
            style={styles.flatListStyle}
            data={ this.state.moments }
            renderItem={({item}) =>
              <Moment
                id={item.id}
                title={item.name}
                time={item.duration}
              />}
          />
          <Button
            type='login'
            style={styles.buttonStyle}
            onClick={() => {this.buttonClickedMvmt()}}
            text='Filter Activities'
          />
          {
            this.props.visible &&
              <MvmtModal/>
          }
        </View>
      )
    }
      return (
        <View style={styles.viewStyle}>
          <FlatList
            style={styles.flatListStyle}
            data={ this.state.moments }
            renderItem={({item}) =>
              <Moment
                title={item.name}
                time={item.duration}
              />}
          />
          <Button
            type='login'
            style={styles.buttonStyle}
            onClick={() => {this.buttonClickedMind()}}
            text='Filter Activities'
          />
          {
            this.props.visible &&
              <MindModal/>
          }
        </View>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
