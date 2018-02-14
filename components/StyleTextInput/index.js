import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const StyleTextInput = ({pholder, changeFunction, cap, passwordSecure, nameProp, sizeProp, colorProp}) => (
  <TextInput 
    style={styles.styleTextInput} 
    placeholder={pholder}
    onChangeText={changeFunction}
    autoCapitalize="none"
    secureTextEntry={passwordSecure}
  />
)

StyleTextInput.propTypes = {
  pholder: PropTypes.string,
  cap: PropTypes.string,
  passwordSecure: PropTypes.bool,
  changeFunction: PropTypes.func,
  nameProp: PropTypes.string,
  sizeProp: PropTypes.number,
  colorProp: PropTypes.string,
}

export default StyleTextInput

// KEEPING AS NOTES FOR FUTURE CODE
// export default class StyleTextInput extends Component {
//   constructor(props) {
//     super(props)
//   }  
//   render () {
//     return (
//       <TextInput style={styles.styleTextInput} 
//       placeholder={this.props.pholder}
//       onChangeText={this.props.changeFunction}
//       />
//     );
//   }
// };