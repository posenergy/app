import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const StyleTextInput = ({pholder, changeFunction}) => (
  <TextInput style={styles.styleTextInput} 
    placeholder={pholder}
    onChangeText={changeFunction}
  />
)

StyleTextInput.propTypes = {
  pholder: PropTypes.string,
  changeFunction: PropTypes.func
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