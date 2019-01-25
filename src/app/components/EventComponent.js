import React, {Component} from "react"

export default class EventComponent extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    return (
      <div style={divStyle}>
      <ul>
        <li>eventsList</li>
      </ul>
      

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
