import React, {Component} from "react"


const divStyle = {
    margin: '100px',
    height: '300px'
};

export default class EventListComponent extends Component {
  constructor(props) {
    super(props)

    const {actions, auth} = props
    this.actions = actions
    this.auth = auth
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);

    this.state={
        name:'',
        login:'',
        password:'',
        email:''
    }


  }


  handleSubmit(event){
    event.preventDefault()
    this.actions.loginAction({
      login: 'test',
      password: '123',
    });

  }

  handleChangeName(event){
        this.name = event.target.value
    }

  handleChangeLogin(event){
        this.login = event.target.value
    }

  handleChangePassword(event){
        this.password = event.target.value
    }

  handleChangeEmail(event){
        this.email = event.target.value
    }

  render() {
    return (

      <div className="events-list-page">


        <div className="events-list-menu">
          <div className="events-list-menu__content-container">

            <div className="events-list-menu__item events-list-menu__item--date ascending">
              Дата
            </div>
            <div className="events-list-menu__item events-list-menu__item--name">
              Название
            </div>
            <div className="events-list-menu__item events-list-menu__item--count">
              Кол-во участников ( оф. / всего )
            </div>
            <div className="events-list-menu__item events-list-menu__item--create-event">
              Создать событие
            </div>
          </div>
        </div>

        <div className="events-list">
          <div className="events-list-item active">
            <div className="events-list-item__head">

              <div className="events-list-item__icon"></div>

              <div className="events-list-item__date">
                24.01.2019 -
                24.01.2019
              </div>

              <div className="events-list-item__name">
                Традиционная игра на открытом воздухе
              </div>

              <div className="events-list-item__count">
                3 / 10
              </div>

              <div className="events-list-item__btn reg">
                регистрация
              </div>
            </div>

            <div className="events-list-item__dropdown event-info">
              <div className="event-info__description">
                CTF (Capture the flag) — это командная игра, главной целью которой является захват «флага» у
                соперника. Формат Сapture the flag может использоваться и в пейнтболе, и среди ролевиков, и в
                компьютерных играх. В области компьютерной безопасности тоже есть своё понятие CTF. Командные
                соревнования по информационной безопасности формата CTF — это как раз то, что стало причиной
                появления тысяч команд со всего мира и то, ради чего создана эта лента.
              </div>

              <div className="event-info__organizers">
                Организатор: Газпром
              </div>

              <div className="event-info__sponsors-list sponsors-list">
                <div className="sponsors-list__title">Спонсоры:</div>

                <div className="sponsors-list__list-container">
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                  <a className="sponsors-list__item"><img src="img/megafon.png" alt=""/></a>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    )
  }
}

