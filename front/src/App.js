// App.js

import React, { Component } from 'react';
import './App.css';
import AuthService from './components/auth/auth-service';
import Navbar from './components/navBar/NavBar';
import Home from './components/Home/Home'; 
// import DateVeterinary from './components/DateVeterinary/DateVeterinary';




class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
      
        </div>
      
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
          <Home getUser={this.getTheUser}/>
          {/* <DateVeterinary/> */}
         
          
          
        </div>
      );
    }
  }
}
export default App;

