import React, { Component } from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.oneOf(['red', 'grey', 'white', 'black', 'blacksmall', 'whiteButtonText', 'blue', 'boldBlack']),
    onClick: PropTypes.func.isRequired,
    onLong: PropTypes.func,
    type: PropTypes.oneOf([
      'login',
      'menu',
      'register',
      'modal',
      'filter',
      'schedule',
      'picker',
      'filterButton',
      'mindmodal',
    ]).isRequired,
    img: PropTypes.element,
    icon: PropTypes.element,
    loading: PropTypes.bool,
  }
  static defaultProps = {
    type: 'default',
    text: '',
    loading: false,
  }

  _renderText = () =>
    this.props.text !== '' &&
    <Text style={[styles[this.props.textColor]]}>{this.props.text}</Text>
  _renderIcon = () =>
    this.props.icon !== '' &&
    this.props.icon
  _renderLoader = () => 
    this.props.loading && 
    <ActivityIndicator size="large" style={styles.spinner}/>

  render() {
    if (this.props.type === 'filter') {
      return (
      <TouchableOpacity
        onPress={!this.props.loading && this.props.onClick}
        style={[styles.filterButton, styles[this.props.type]]}
      >
        {this.props.img}
        {this._renderIcon()}
        {this._renderText()}
      </TouchableOpacity>
    )
    }
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        style={[styles.button, styles[this.props.type]]}
      >
        {this.props.img}
        {this._renderIcon()}
        {this._renderText()}
        {this._renderLoader()}
      </TouchableOpacity>
    )
  }
}
