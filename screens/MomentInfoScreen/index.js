import React from 'react'
import YouTube from 'react-native-youtube'
import { View, Image } from 'react-native'
import SchedModalInfo from '../../components/SchedModalInfo'
import styles from './styles'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
  picker: state.pickerReducer,
})

class MomentInfoScreen extends React.Component {

  constructor(props) {
  super(props)

    this.state = {
      time: this.props.navigation.state.params.time,
      vid: this.props.navigation.state.params.vid,
      title: this.props.navigation.state.params.title,
      img: this.props.navigation.state.params.img,
      text: this.props.navigation.state.params.desc,
      category: this.props.navigation.state.params.category,
      brand: this.props.navigation.state.params.brand,
      icon: this.props.navigation.state.params.icon,
      id: this.props.navigation.state.params.id,
      check: (this.props.navigation.state.params.category === 'movement'),
      cal: this.props.navigation.state.params.cal,
    }
  }

  defaultRender = () => {
    if (this.state.category === 'movement') {
      return (<View height={142} width={244}>
        <Image
          resizeMode='stretch'
          style={{flex: 1}}
          source={require('../src/mvmtDefault.png')}/>
      </View>)
    } else {
        return (<View height={142} width={244}>
          <Image
            resizeMode='stretch'
            style={{flex: 1}}
            source={require('../src/mindDefault.png')}/>
        </View>)
      }
    }

  parseVid = () => {
    if (this.state.vid) {
      const url = this.state.vid
      if (url.includes('?v=')) {
      const split1 = url.split('?v=')
      const split2 = split1[1].split('&')
      return (<YouTube
              videoId={split2[0]}
              play={false}
              fullscreen={true}
              loop={false}

              onReady={e => this.setState({ isReady: true })}
              onChangeState={e => this.setState({ status: e.state })}
              onChangeQuality={e => this.setState({ quality: e.quality })}
              onError={e => this.setState({ error: e.error })}
              style={{ alignSelf: 'stretch', height: 142, width: 244 }}
            />)
      } else { this.defaultRender() }
    } else if (this.state.img) {
      return (<View height={142} width={244}>
                <Image
                  style={{flex: 1}}
                  source={{uri: this.state.img}}/>
              </View>)
    } else { this.defaultRender() }
  }

  render() {
    return(
      <View style={styles.view}>
        <SchedModalInfo
            title = {this.state.title}
            brand ={this.state.brand}
            image = {this.state.icon}
            text = {this.state.text.split('`')[0]}
            varelement = {this.parseVid()}
          />
      </View>
    )
  }

}

export default connect(mapStateToProps, null)(MomentInfoScreen)
