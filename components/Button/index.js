import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.oneOf(['red', 'white', 'black', 'whiteButtonText', 'blue', 'boldBlack']),
    onClick: PropTypes.func.isRequired,
    onLong: PropTypes.func,
    type: PropTypes.oneOf([
      'login',
      'menu',
      'register',
      'modal',
      'filter',
    ]).isRequired,
    img: PropTypes.element,
    icon: PropTypes.element,
  }
  static defaultProps = {
    type: 'default',
    text: '',
  }

  _renderText = () =>
    this.props.text !== '' &&
    <Text style={[styles[this.props.textColor]]}>{this.props.text}</Text>
  _renderIcon = () =>
    this.props.icon !== '' &&
    this.props.icon

  render() {
    if (this.props.type === 'filter'){
      return (
      <TouchableOpacity
        onPress={this.props.onClick}
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
      </TouchableOpacity>
    )
  }
}
