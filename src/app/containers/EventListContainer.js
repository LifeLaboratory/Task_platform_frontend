import React, {Component} from 'react'
import {connect} from 'react-redux'
import EventListComponent from '../components/EventListComponent'
import loginActionCreator from '../actions/creators/loginActionCreator'
import {bindActionCreators} from "redux"

class EventListContainer extends Component {
  constructor(props) {
    super(props)

    const {dispatch, auth} = props

    const loginAction = bindActionCreators(loginActionCreator, dispatch)

    this.actions = {
      loginAction
    }

    this.auth = auth
    this.events = [{
      date: "24.01.2019 - 24.01.2019",
      name: "Традиционная игра на открытом воздухе",
      players: "3/10",
      description: `CTF (Capture the flag) — это командная игра, главной целью которой является захват «флага» у соперника. 
      Формат Сapture the flag может использоваться и в пейнтболе, и среди ролевиков, и в компьютерных играх. 
      В области компьютерной безопасности тоже есть своё понятие CTF. 
      Командные соревнования по информационной безопасности формата CTF — это как раз то,
       что стало причиной появления тысяч команд со всего мира и то, ради чего создана эта лента.`,
      organizer: {
        name: "Gazprom"
      },
      sponsors: [
        {
          name: "Megafon"
        }
      ]
    }]
  }


  render() {

    return (<EventListComponent actions={this.actions} auth={this.props.auth} events={this.events}/>)
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth}
}
export default connect(mapStateToProps)(EventListContainer)
