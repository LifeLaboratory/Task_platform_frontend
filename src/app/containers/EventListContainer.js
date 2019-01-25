import React, {Component} from 'react'
import {connect} from 'react-redux'
import EventListComponent from '../components/EventListComponent'
import fetchEventsCreator from '../actions/creators/fetchEventsCreator'
import {bindActionCreators} from "redux"

class EventListContainer extends Component {
  constructor(props) {
    super(props)

    const {auth, dispatch} = props
    const fetchEvents = bindActionCreators(fetchEventsCreator, dispatch)
    fetchEvents()
  }

  render() {

    return (<EventListComponent actions={this.actions} auth={this.props.auth} events={this.props.events}/>)
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth, events: state.events}
}
export default connect(mapStateToProps)(EventListContainer)
