import React, { Component } from 'react'
import { connect } from 'react-redux'
import {AuthComponent} from "../components/AuthComponent";

class AuthContainer extends Component {
  /* constructor(props) {
    super(props)

    const {dispatch} = props
    this.action = bindActionCreators(ActionCreator, dispatch)
  } */

  render() {
    return (<AuthComponent />)
  }
}

export default connect()(AuthContainer)
