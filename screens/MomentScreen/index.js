import React from 'react'
import YouTube from 'react-native-youtube'
import { View, Text, Image, Switch } from 'react-native'
import SchedModal from '../../components/SchedModal'
import Button from '../../components/Button'
import styles from './styles'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

const mapStateToProps = state => ({
  token: state.tokenReducer.token,
  user: state.userReducer,
  picker: state.pickerReducer,
})

class MomentScreen extends React.Component {

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
    console.log("tokennn", this.props.token)
    return(
      <View style={styles.view}>
        <SchedModal
            title = {this.state.title}
            brand ={this.state.brand}
            image = {this.state.icon}
            text = {this.state.text.split('`')[0]}
            varelement = {this.parseVid()}
            varelement2 = {
              <View style={styles.toggle}>
                <Switch
                  value={this.state.check}
                  style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                  onTintColor={'#545680'}
                  onValueChange={() => this.setState({check: !this.state.check})}
                />
                <Text style={styles.toggleText}>
                Include my recovery time in results.
                </Text>
              </View>
            }
            button = {this.props.navigation.state.params.notLoggedIn ?
            <Button type='schedule'
              justifyContent= 'flex-end'
              onClick={() => {
                this.props.navigation.navigate('Landing')
                }
              } text='Sign Up' textColor='white'/> 
              : <Button type='schedule'
              justifyContent= 'flex-end'
              onClick={() => {
                const { navigate } = this.props.navigation
                if(this.state.cal) {
                navigate('Select', {
                  time: (!this.state.check) ? this.state.time : this.state.time + this.props.user.buffer,
                  title: this.state.title,
                  desc: this.state.text,
                  brand: this.state.brand,
                  vid: this.state.vid,
                  icon: this.state.icon,
                  id: this.state.id,
                  eventStart: this.props.picker.pickerDate,
                })
                } else {
                    navigate('Schedule', {
                    time: (!this.state.check) ? this.state.time : this.state.time + this.props.user.buffer,
                    title: this.state.title,
                    pict: this.state.pict,
                    desc: this.state.text,
                    brand: this.state.brand,
                    vid: this.state.vid,
                    id: this.state.id,
                    icon: this.state.icon,
                    check: this.state.check,
                  })
                }
              }
            } text='Schedule' textColor='white'/>}
          />
      </View>
    )
  }

}

export default connect(mapStateToProps, null)(MomentScreen)
