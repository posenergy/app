import React from 'react'
import Button from '../Button'

export default class FilterButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      style: '#F2F2F2',
      textcolor: 'black',
    }
  }

  render() {
    return(
      <Button
        text={this.props.titleProp}
        onClick={this.props.onPressProp}
        width= {this.props.width}
        type={this.props.typeProp}
        textColor= {this.props.textColor}
      />
    )
  }
}
