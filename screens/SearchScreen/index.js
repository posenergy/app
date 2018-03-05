import React from 'react'
import { ActivityIndicator, AppRegistry, Button, Modal, FlatList, Text, View } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { List, ListItem } from 'react-native-elements'

import config from '../../config/config'
import styles from './styles'

import Moment from '../../components/Moment'
import MvmtModal from '../../components/MvmtModal'
import MindModal from '../../components/MindModal'


export default class SearchScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Search',
  })

  constructor(props) {
    super(props)

    this.state = {
      category: this.props.navigation.state.params.category
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
    console.log("*******************", this.props.navigation.state.params.category)
    return fetch(config.apiUrl + '/moments/search/cat/?cat='+ this.state.category)
      .then((res) => res.json())
      .then(res => {
        this.setState({
          moments: res,
          modalVisible: false,
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // several if statements that create different modals based on
  // if mvmt or if mindfulness. 

  //how to control state using buttons inside of modal?
  // -> FilterModal file?
  // but then how to not hard code the mvmt and mindfulness modals?

  // if (this.state.category == ) -> copy and paste returned code
  // FIRST = MOVEMENT, SECOND = MINDFULNESS

  render() {
    if (this.state.category == "mvmt") {
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
            style={styles.buttonStyle}
            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
            title="Filter Activities"
          /> 
          { 
            this.state.modalVisible &&
            <View style={styles.Container}>
              <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}>
                <View style={styles.modalContainer}>
                  <MvmtModal/>
                  <Button
                    style={styles.button}
                    onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                    title= "Apply"
                  />
                </View>
              </Modal>
          </View>}
        </View>
      );
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
            style={styles.buttonStyle}
            onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
            title="Filter Activities"
          /> 
          { 
            this.state.modalVisible &&
            <View style={styles.Container}>
              <Modal
                visible={this.state.modalVisible}
                animationType={'slide'}>
                <View style={styles.modalContainer}>
                  <MindModal/>
                  <Button
                    style={styles.button}
                    onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                    title= "Apply"
                  />
                </View>
              </Modal>
          </View>}
        </View>
      );
    }
}
