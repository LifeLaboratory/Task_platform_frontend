import React, {Component} from "react"


const divStyle = {
    margin: '100px',
    height: '300px'
};

export default class EventsListComponent extends Component {
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

