import React from 'react'
import Button from '../Button'

export default class FilterButton extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      buttonColor: '#F2F2F2',
    }
  }

  render() {
    return(
      <Button
        text={this.props.titleProp}
        onClick={this.props.onPressProp}
        color={this.state.buttonColor}
        type='filter'
        textColor='black'
      />
    )
  }
}
