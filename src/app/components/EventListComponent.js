import React, {Component} from "react"

export default class EventListComponent extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    const {events, actions, auth} = this.props

    const eventList = events.list

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

          {
            eventList.map((event) =>
              <div key={event.name} className="events-list-item active">
                <div className="events-list-item__head">

                  <div className="events-list-item__icon"></div>

                  <div className="events-list-item__date">
                    {event.date}
                  </div>

                  <div className="events-list-item__name">
                    {event.name}
                  </div>

                  <div className="events-list-item__count">
                    {event.players}
                  </div>

                  <div className="events-list-item__btn reg">
                    регистрация
                  </div>
                </div>

                <div className="events-list-item__dropdown event-info">
                  <div className="event-info__description">
                    {event.description}
                  </div>

                  <div className="event-info__organizers">
                    Организатор: {event.organizer.name}
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
            )
          }

        </div>
      </div>

    )
  }
}

