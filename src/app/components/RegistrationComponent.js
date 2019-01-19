import React, {Component} from "react"

const divStyle = {
    margin: '100px',
    height: '300px'
};

export class EventsComponent extends Component {
  constructor(props) {
    super(props)
    
    this.handleSubmit= this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    
  }

  render() {

    return (
      <div style={divStyle}>

        <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <input type="text" id="name" value={this.state.name} onChange={this.handleChangeName}></input>
        </label>
        <br/>
        <label>
            Login:
        <input type="text" id="login" value={this.state.login} onChange={this.handleChangeLogin}></input>
        </label>
        <br/>
        <label>
            Password:
        <input type="password" id="password" value={this.state.password} onChange={this.handleChangePassword}></input>
        </label>
        <br/>
        <label>
            E-mail:
        <input type="text" id="email" value={this.state.email} onChange={this.handleChangeEmail}></input>
        </label>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}