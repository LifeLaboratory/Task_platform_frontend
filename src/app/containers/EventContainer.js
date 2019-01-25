import React, {Component} from "react"
import EventComponent from '../components/EventComponent'
import getEventsLoginCreator from '../actions/creators/getEventsLoginCreator'
import {bindActionCreators} from "redux"
import { connect } from 'react-redux'

class EventContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <EventComponent actions={this.actions}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(EventContainer)
