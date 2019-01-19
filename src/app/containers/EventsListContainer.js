import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventsListComponent from '../components/EventsListComponent'
import loginActionCreator from '../actions/creators/loginActionCreator'
import { bindActionCreators } from "redux"

class EventsListContainer extends Component {
  constructor(props) {
    super(props)


    const {dispatch, auth} = props
    const loginAction = bindActionCreators(loginActionCreator, dispatch)
    this.actions = {
      loginAction
    }
    this.auth = auth
  } 

  render() {
    return (<EventsListComponent actions={this.actions} auth={this.props.auth}/>)
  }
}
const mapStateToProps = (state) => {
  return {auth:state.auth}
}
export default connect(mapStateToProps)(EventsListContainer)