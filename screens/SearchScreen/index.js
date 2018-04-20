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
  token: state.tokenReducer.token,
  filterTags: state.filterState.tags,
  visibleMind: state.toggleMindVisibility.visible,
  visibleMvmt: state.toggleMvmtVisibility.visible,
  tags: state.filterState.tags,
  sweat: state.filterState.sweat,
  durat: state.filterState.duration,
})

const mapDispatchToProps = {
  mindVisibility,
  mvmtVisibility,
}

class SearchScreen extends React.Component {

  buttonMind() {
    this.props.mindVisibility()
    this.setState({ flatList: true})
  }

  buttonMvmt() {
    this.props.mvmtVisibility()
    this.setState({ flatList: true})
  }

  constructor(props) {
    super(props)

    this.state = {
      moments: null,
      category: this.props.navigation.state.params.category,
      flatList: null,
    }
  }

  flat() {
    if (this.state.moments.length === 0) {
      this.setState({ flatList: false })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let tagUrl = ''
    if (this.props.filterTags === []) {
      return fetch(config.apiUrl + '/moments/search/cat/?cat=' + this.state.category, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.props.token,
        },
      })
      .then((res) => res.json())
      .then(res => {
        this.flat()
        this.setState({
          moments: res,
        })
      })
      .catch((error) => {
        console.error(error)
      })
    } else if (this.props.durat === null && this.props.sweat === null) {
        this.props.tags.forEach(function(i) {
          tagUrl += i + '&tag[]='
        })
        return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
          '&sweat=' + '&duration=' + '&tag[]=' + tagUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.props.token,
          },
        })
          .then((res) => res.json())
          .then(res => {
            this.flat()
            this.setState({ moments: res })
            }
          )
          .catch((error) => {
            console.error(error)
          })
    } else if (this.props.sweat === null) {
        this.props.tags.forEach(function(i) {
          tagUrl += i + '&tag[]='
        })
        return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
          '&sweat=' + '&duration=' + this.props.durat + '&tag[]=' + tagUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.props.token,
          },
        })
          .then((res) => res.json())
          .then(res => {
            this.setState({ moments: res })
            this.flat()
          })
          .catch((error) => {
            console.error(error)
          })
    } else if (this.props.sweat !== null && this.props.durat === null) {
        this.props.tags.forEach(function(i) {
          tagUrl += i + '&tag[]='
        })
        return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
          '&sweat=' + this.props.sweat + '&duration=' + '&tag[]=' + tagUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.props.token,
          },
        })
          .then((res) => res.json())
          .then(res => {
            this.setState({ moments: res })
            this.flat()
          })
          .catch((error) => {
            console.error(error)
          })
    } else if (this.props.visibleMind !== true && prevProps.visibleMind === true) {
      this.props.tags.forEach(function(i) {
        tagUrl += i + '&tag[]='
      })
      return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
        '&duration=' + this.props.durat + '&tag[]=' + tagUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': this.props.token,
        },
      })
        .then((res) => res.json())
        .then(res => {
          this.setState({ moments: res })
          this.flat()
        })
        .catch((error) => {
          console.error(error)
        })
    } else if (this.props.visibleMvmt !== true && prevProps.visibleMvmt === true) {
        this.props.filterTags.forEach(function(i) {
          tagUrl += i + '&tag[]='
        })
        return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
          '&sweat=' + this.props.sweat + '&duration=' + this.props.durat + '&tag[]=' + tagUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.props.token,
          },
        })
      .then((res) => res.json())
      .then(res => {
        this.setState({ moments: res })
        this.flat()
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

  componentDidMount() {
    let tagUrl = ''
    if (this.props.durat === null && this.props.sweat === null) {
        this.props.tags.forEach(function(i) {
          tagUrl += i + '&tag[]='
        })
        return fetch(config.apiUrl + '/moments/search/filters/?cat=' + this.state.category +
          '&sweat=' + '&duration=' + '&tag[]=' + tagUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': this.props.token,
          },
        })
          .then((res) => res.json())
          .then(res => {
            this.setState({ moments: res,
                            flatList: true })
          })
          .catch((error) => {
            console.error(error)
          })
    }
    return fetch(config.apiUrl + '/moments/search/cat/?cat=' + this.state.category, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': this.props.token,
      },
    })
      .then((res) => res.json())
      .then(res => {
        this.setState({ moments: res })
        this.flat()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  render() {
    if (this.state.category === 'movement') {
      return(
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
                time: item.duration,
                vid: item.vid,
                id: item._id,
                icon: item.icon,
                category: item.category,
              })
             }}>
              <Moment
                title={item.name}
                time={item.duration}
                sweat={item.sweatIndex}
                icon={item.icon}
                brand={item.partner}
              />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity
          style = {styles.activities}
          onPress={() => this.props.mvmtVisibility()}>
          <Image style={{height: 35, width: 333}} source={require('./src/button.png')}/>
        </TouchableOpacity>
        {
          this.props.visibleMvmt &&
            <MvmtModal/>
        }
        </View>
      )
    } else if (this.state.category !== 'movement') {
      return (
        <View style={styles.viewStyle}>
            <FlatList
              data={this.state.moments}
              renderItem={({item}) =>
                <TouchableOpacity style={styles.button}
                  onPress={(event) => {
                    const {navigate} = this.props.navigation
                    navigate('Moment', {
                      title: item.name,
                      img: item.img,
                      desc: item.description,
                      brand: item.partner,
                      time: item.duration,
                      vid: item.vid,
                      id: item._id,
                      category: item.category,
                      icon: item.icon,
                    })
                  }}>
                <Moment
                  title={item.name}
                  time={item.duration}
                  sweat={item.sweatIndex}
                  icon={item.icon}
                  brand={item.partner}/>
                </TouchableOpacity>
              }/>
            <TouchableOpacity
              style = {styles.activities}
              onPress={() => this.props.mindVisibility()}>
              <Image style={{height: 35, width: 333}} source={require('./src/button.png')}/>
            </TouchableOpacity>
          {
            this.props.visibleMind &&
              <MindModal/>
          }</View>
      )
    }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
