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
    content: 'We automatically add a 30 minute recovery time for you to shower and get ready before your next calendar event. You can turn this on or off before scheduling an activity, or change the default time in your Profile.',
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
    fontFamily: 'Circular Std',
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerTextField: {
    textAlign: 'left',
    fontSize: 14,
    width: 270,
    fontWeight: 'bold',
    fontFamily: 'Circular Std',
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
  imagecont: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  contentText: {
    marginLeft: 20,
    fontFamily: 'Circular Std',
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
          marginLeft={20}
          style ={{height: 25, width: 25}}
          source= {isActive ? require('./src/filledicon.png') : require('./src/icon.png')}
        />
        <Text style={styles.headerTextField}>{section.title}</Text>
        </View>
      </Animatable.View>
    )
  }

  _renderContent(section, i, isActive) {
    return (
      <Animatable.View duration={400} style={[styles.content, isActive ? styles.active : styles.inactive]} transition="backgroundColor">
        <Animatable.Text style={styles.contentText} animation={isActive ? 'bounceIn' : undefined}>{section.content}</Animatable.Text>
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
