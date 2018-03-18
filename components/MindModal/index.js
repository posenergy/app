import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

import FilterButton from '../../components/FilterButton'
import FilterHeader from '../../components/FilterHeader'

export default class MindModal extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tags: [],
      duration: 30,
      buttonColor: '#F2F2F2',
    }
  }

  changeTag(tag) {
    this.setState({tags: [...this.state.tags, tag]})
  }

  changeDuration(duration) {
    this.setState({ duration: duration})
  }

  componentDidUpdate(prevProps, prevState) {
  }

  render() {
    return(
      <View style={styles.Container}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}>
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>

              <Text style={styles.title}>Filter Activities</Text>

              <FilterHeader headerProp='ACTIVITIES'/>
              <View style={styles.buttons}>
                <FilterButton
                  titleProp='Craft'
                  onPressProp={() => this.changeTag('Craft')} />
                <FilterButton
                  titleProp='Journal'
                  onPressProp={() => this.changeTag('Journal')} />
                <FilterButton
                  titleProp='Meditate'
                  onPressProp={() => this.changeTag('Meditate')} />
              </View>

              <FilterHeader headerProp='DURATION'/>
              <View style={styles.buttons}>
                <FilterButton
                  titleProp='< 15 min'
                  onPressProp={() => this.changeDuration(15)} />
                <FilterButton
                  titleProp='< 30 min'
                  onPressProp={() => this.changeDuration(30)} />
                <FilterButton
                  titleProp='< 60 min'
                  onPressProp={() => this.changeDuration(60)} />
              </View>
            </View>
            <Button
              style={styles.button}
              onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
              title= 'Apply'
            />
          </View>
        </Modal>
      </View>
    )
  }
}
