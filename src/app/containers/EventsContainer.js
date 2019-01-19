import React, { Component } from 'react'
import { connect } from 'react-redux'
import {EventsComponent} from "../components/EventsComponent";

class EventsContainer extends Component {
  /* constructor(props) {
    super(props)

    const {dispatch} = props
    this.action = bindActionCreators(ActionCreator, dispatch)
  } */

  render() {
    return (<EventsComponent />)
  }
}

export default connect()(EventsContainer)
