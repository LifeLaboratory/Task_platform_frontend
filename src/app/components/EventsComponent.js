import React, {Component} from "react"

const divStyle = {
    margin: '100px',
    height: '300px'
};

export class EventsComponent extends Component {
  constructor(props) {
    super(props)
  }

  

  render() {

    return (
      <div style={divStyle}>

        Here will be events

      </div>
    )
  }
}