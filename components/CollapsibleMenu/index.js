import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import Accordion from 'react-native-collapsible/Accordion'

const FILLER_IPSUM = 'Filler content. Filler content. Filler content. Filler content.'

const CONTENT = [
  {
    title: 'What is the "Activities" button for?',
    content: FILLER_IPSUM,
  },
  {
    title: 'What is the "Calendar" button for?',
    content: FILLER_IPSUM,
  },
  {
    title: 'Why do you add 30 minutes to every workout?',
    content: FILLER_IPSUM,
  },
  {
    title: 'How do you choose the acitivities?',
    content: FILLER_IPSUM,
  },
  {
    title: 'Can I make a custom activity?',
    content: FILLER_IPSUM,
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
})

export default class ExampleView extends Component {
  state = {
    activeSection: false,
    collapsed: true,
  };

  _toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  _setSection(section) {
    this.setState({ activeSection: section })
  }

  _renderHeader(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.header, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    )
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
      </Animatable.View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Accordion
          activeSection={this.state.activeSection}
          sections={CONTENT}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          duration={400}
          onChange={this._setSection.bind(this)}
        />

      </View>
    )
  }
}
