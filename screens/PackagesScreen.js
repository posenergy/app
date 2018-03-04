import React from 'react'
import { View, Text } from 'react-native'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  user: state.user
})


class PackagesScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: 'Packages',
  })
  componentDidUpdate(){
    console.log('@@@@@@@@@@@@@@@@@')
    console.log(this.props.user)
  }
  componentWillReceiveProps(nextProps){
    console.log('@@@@@@@@@@@@@@@@@')
    console.log(nextProps.user)
  }
  componentDidMount() {
    console.log('This is it')
    console.log(this.props)
  }
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    console.log('@@@@@@@@@@@@@@@@@')
    console.log(this.props.user)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>View your Packages</Text>
      </View>

    )
  }
}

export default connect(mapStateToProps)(PackagesScreen)