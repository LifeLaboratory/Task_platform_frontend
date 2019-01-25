//EventList
import React, {Component} from "react"

export default class HeaderComponent extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <header className="header">
        <div className="header__content-container">

          <a href="/" className="header__logo">
            <img src="img/logo.png" alt=""/>
          </a>

          <div className="header-menu header__menu">
            <a href="" className="header-menu__item">список событий</a>
            <a href="" className="header-menu__item">мои события</a>
            <a href="" className="header-menu__item">авторизация</a>
          </div>
        </div>
      </header>)
  }
}
