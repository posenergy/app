import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import Accordion from 'react-native-collapsible/Accordion'

const CONTENT = [
  {
    title: 'What is the "Activities" button for?',
    content: 'Click here to first find curated movement and meditation activities, then schedule them in your calendar.',
  },
  {
    title: 'What is the "Calendar" button for?',
    content: 'Click here first to find free time in your calendar, then schedule curated activities that fit your availability.',
  },
  {
    title: 'Why do you add 30 minutes to every workout?',
    content: 'We automatically add a 30 minute buffer for you to shower and get ready before your next calendar event. You can always change this default setting in ‘Account’ → ‘Preferences.',
  },
  {
    title: 'How do you choose the activities?',
    content: 'Every activity has been tested for quality by our team. (Yes, we have done every single workout!). We have permission from all the original content creators to feature these activities.',
  },
  {
    title: 'Can I make a custom activity?',
    content: 'Not yet, but send us your favorite activity / video / blog post and we’ll see if we can incorporate it! Reach us at positiveenergyapp@gmail.com.',
  },
  {
    title: 'Can I give you feedback?',
    content: 'We’d love to hear from you! Reach out to us at positiveenergyapp@gmail.com.',
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
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  active: {
    backgroundColor: 'white',
  },
  inactive: {
    backgroundColor: 'white',
  },
  imagecont: {
    flexDirection:'row',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
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
        <View style={styles.imagecont}>
        <Image
          marginRight={8}
          marginLeft={15}
          source={require('./src/icon.png')}
        />
        <Text style={styles.headerText}>{section.title}</Text>
        </View>
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
