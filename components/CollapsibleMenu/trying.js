import React from 'react'
import {
  Image,
} from 'react-native'
import Collapsible from 'react-native-collapsible';

const CollapsibleMenu = () => (
  <Collapsible collapsed={true}>
    <Image
      height={130}
      width={130}
      alignSelf= 'center'
      source={require('./logo.png')}/>
  </Collapsible>
)

export default CollapsibleMenu
