import React, {Component} from "react"
import EventComponent from '../components/EventComponent'
import { connect } from 'react-redux'

class EventContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <EventComponent/>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}

export default connect(mapStateToProps)(EventContainer)
