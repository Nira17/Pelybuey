import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '',
      password: '' ,
      showl:false
      
    }
    
    this.service = new AuthService();
    
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ 
          username: "",
          password: "",
          showl:true,
          });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    return(
      <div id="login-box" >
      <div className="left">
       <form onSubmit={this.handleFormSubmit}>
          <h1>Username:</h1>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          <input type="submit" value="Login" />
          
        </form>
        <p>Don't have account? 
            <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
        
      </div>
    )
  }
}

export default Login;