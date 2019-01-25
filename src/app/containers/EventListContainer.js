import React, { Component } from 'react'
import { connect } from 'react-redux'
import EventListComponent from '../components/EventListComponent'
import loginActionCreator from '../actions/creators/loginActionCreator'
import { bindActionCreators } from "redux"

class EventListContainer extends Component {
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
    return (<EventListComponent actions={this.actions} auth={this.props.auth}/>)
  }
}
const mapStateToProps = (state) => {
  return {auth:state.auth}
}
export default connect(mapStateToProps)(EventListContainer)
