import React from 'react'
import { FlatList, View, TouchableOpacity, Image } from 'react-native'

import config from '../../config/config'
import styles from './styles'

import { mindVisibility } from '../../redux/actions/mindModalActions'
import { mvmtVisibility } from '../../redux/actions/mvmtModalActions'
import { connect } from 'react-redux'

import Moment from '../../components/Moment'
import MvmtModal from '../../components/MvmtModal'
import MindModal from '../../components/MindModal'


const mapStateToProps = state => ({
  visibleMind: state.toggleMindVisibility.visible,
  visibleMvmt: state.toggleMvmtVisibility.visible,
  tags: state.filterState.tags,
  sweat: state.filterState.sweat,
  duration: state.filterState.duration,
})

const mapDispatchToProps = {
  mindVisibility,
  mvmtVisibility,
}

class SearchScreen extends React.Component {

  buttonClickedMind = () => {
    this.props.mindVisibility()
  }

  buttonClickedMvmt = () => {
    this.props.mvmtVisibility()
  }

  constructor(props) {
    super(props)

    this.state = {
      category: this.props.navigation.state.params.category,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let tagUrl = ''
    if (this.props.visibleMind !== true && prevProps.visibleMind === true) {
      this.props.tags.forEach(function(i) {
      tagUrl += i + '&tag[]='
      })
      return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
      '&duration=' + this.props.duration + '&tag[]=' + tagUrl)
      .then((res) => res.json())
      .then(res => {
        this.setState({ moments: res })
      })
      .catch((error) => {
        console.error(error)
      })
    } else if (this.props.visibleMvmt !== true && prevProps.visibleMvmt === true) {
      this.props.tags.forEach(function(i) {
      tagUrl += i + '&tag[]='
      })
      return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
      '&sweat=' + this.props.sweat + '&duration=' + this.props.duration + '&tag[]=' + tagUrl)
      .then((res) => res.json())
      .then(res => {
        this.setState({ moments: res })
      })
      .catch((error) => {
        console.error(error)
      })
    }

  }

  componentDidMount() {
    return fetch(config.apiUrl + '/moments/search/cat/?cat=' + this.state.category)
      .then((res) => res.json())
      .then(res => {
        this.setState({
          moments: res,
        })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    if (this.state.category === 'movement') {
      return (
        <View style={styles.viewStyle}>
          <FlatList
            style={styles.flatListStyle}
            data={ this.state.moments }
            renderItem={({item}) =>
              <TouchableOpacity style={styles.button}
                onPress={(event) => {
                const { navigate } = this.props.navigation
                navigate('Moment', {
                  title: item.name,
                  img: item.img,
                  desc: item.description,
                  brand: item.partner,
                  vid: item.vid,
                })
                }}>
                <Moment
                  id={item.id}
                  title={item.name}
                  time={item.duration}
                />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            style = {styles.activities}
            onPress={() => this.props.mvmtVisibility()}>
            <Image source={require('./src/button.png')}/>
          </TouchableOpacity>
          {
            this.props.visibleMvmt &&
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
              <TouchableOpacity style={styles.button}
                onPress={(event) => {
                const { navigate } = this.props.navigation
                navigate('Moment', {
                  title: item.name,
                  brand: item.partner,
                  img: item.img,
                  desc: item.description,
                  vid: item.vid,
                })
                }}>
                <Moment
                  id={item.id}
                  title={item.name}
                  time={item.duration}
                />
              </TouchableOpacity>
            }
          />
          <TouchableOpacity
            style = {styles.activities}
            onPress={() => this.props.mindVisibility()}>
            <Image source={require('./src/button.png')}/>
          </TouchableOpacity>
          {
            this.props.visibleMind &&
              <MindModal/>
          }
        </View>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
