//EventsList

import React, {Component} from "react"
import { connect } from "net"
import EventsComponent from '../components/EventComponent'
import getEventsLoginCreator from '../actions/creators/getEventsLoginCreator'
import { bindActionCreators } from "redux" 

const divStyle = {
    margin: '100px',
    height: '300px'
};

class EventContainer extends Component {
  constructor(props) {
    super(props)

    const {dispatch, auth} = props
    const getEventsLogin = bindActionCreators(getEventsLoginCreator, dispatch)
    this.actions = {
      getEventsLogin
    }
    this.auth = auth
  }

  

  render() {

    return (
      <div style={divStyle}>
        <EventsComponent actions={this.actions}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {auth:state.auth}
}
export default connect(mapStateToProps)(EventContainer)