import React, {Component} from 'react'
import {connect} from 'react-redux'
import EventListComponent from '../components/EventListComponent'
import fetchEventsCreator from '../actions/creators/fetchEventsCreator'
import openEventCreator from '../actions/creators/openEventCreator'
import {bindActionCreators} from "redux"

class EventListContainer extends Component {
  constructor(props) {
    super(props)

    const {auth, dispatch} = props
    const fetchEvents = bindActionCreators(fetchEventsCreator, dispatch)
    const openEvent = bindActionCreators(openEventCreator, dispatch)
    fetchEvents()

    this.actions = {openEvent}
  }

  render() {

    return (<EventListComponent actions={this.actions} auth={this.props.auth} events={this.props.events}/>)
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth, events: state.events}
}
export default connect(mapStateToProps)(EventListContainer)
