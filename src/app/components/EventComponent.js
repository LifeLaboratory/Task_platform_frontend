import React, {Component} from "react"

export default class EventComponent extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div className="event-page">
        <div className="event-page__content-container">
          <div className="event-page__title">Традиционная игра на открытом воздухе</div>

          <div className="event-page__main-block">
            <div className="event-page-tabs event-page__tabs">
              <div className="event-page-tabs__tab active">Информация</div>
              <div className="event-page-tabs__tab">Задачи</div>
              <div className="event-page-tabs__tab">Статистика</div>
            </div>

            <div className="event-info event-page__info disabled">
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

            <div className="event-page__tasks-list-block disabled">

              <div className="task-categories-list event-page__categories-list">
                <div className="task-categories-list__item">ppc</div>
                <div className="task-categories-list__item">programming</div>
                <div className="task-categories-list__item">hack</div>
              </div>

              <div className="tasks-list event-page__tasks-list">
                <div className="tasks-list-item">
                  <div className="tasks-list-item__count">200</div>
                  <div className="tasks-list-item__name">Есть ещё один способ стать участником RuCTF</div>
                </div>
                <div className="tasks-list-item">
                  <div className="tasks-list-item__count">200</div>
                  <div className="tasks-list-item__name">Есть ещё один способ стать участником RuCTF</div>
                </div>
                <div className="tasks-list-item">
                  <div className="tasks-list-item__count">200</div>
                  <div className="tasks-list-item__name">Есть ещё один способ стать участником RuCTF</div>
                </div>
              </div>

            </div>

            <div className="scoreboard event-page__scoreboard">
              <div className="scoreboard-item">
                <div className="scoreboard-item__place">1</div>
                <div className="scoreboard-item__name">Крутые перцы</div>
                <div className="scoreboard-item__score">420</div>
              </div>
              <div className="scoreboard-item">
                <div className="scoreboard-item__place">2</div>
                <div className="scoreboard-item__name">Крутые перцы</div>
                <div className="scoreboard-item__score">400</div>
              </div>
              <div className="scoreboard-item">
                <div className="scoreboard-item__place">3</div>
                <div className="scoreboard-item__name">Крутые перцы</div>
                <div className="scoreboard-item__score">390</div>
              </div>
              <div className="scoreboard-item">
                <div className="scoreboard-item__place">4</div>
                <div className="scoreboard-item__name">Крутые перцы</div>
                <div className="scoreboard-item__score">380</div>
              </div>
            </div>


          </div>
        </div>
      </div>

  )
  }
  }
