import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux"
import HeaderComponent from "../components/HeaderComponent";

class HeaderContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<HeaderComponent auth={this.props.auth}/>)
  }
}

const mapStateToProps = (state) => ({auth: state.auth})

export default connect(mapStateToProps)(HeaderContainer)
