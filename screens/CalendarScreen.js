import React from 'react'
import { View } from 'react-native'

import AboutModal from '../components/AboutModal'

class CalendarScreen extends React.Component {

  constructor(props){
  	super(props)
  		this.state = {
  			// info: this.props.navigation.state.params.info,
  		}
  }

  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {
	        this.state.info &&
	        <AboutModal
	        close = {this.setState({info: false})}/>
      	}
      </View>
    )
  }
}

export default CalendarScreen
