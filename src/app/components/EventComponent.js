//EventList
import React, {Component} from "react"

const divStyle = {
    margin: '100px',
    height: '300px'
};

export default class EventsComponent extends Component {
  constructor(props) {
    super(props)
    
    this.eventList = 'test'
    
  }

  render() {

    return (
      <div style={divStyle}>
      <ul>
        <li>eventsList</li>
      </ul>
      

      </div>
    )
  }
}