import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';
import Session from '../Session/Session';
import "./navbar.css"

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.props.getUser(null);  
      this.setState({ loggedInUser: null });
    })
  }

  render(){
    if(this.state.loggedInUser){
      return(

        <div className="all">
        <div className="nav-style">
        
        <div className="item-nav2">
        <h1>Welcome, {this.state.loggedInUser.username}</h1>
        </div>
        <div className="item">
        <button className=".btn" onClick={() => this.logoutUser()}> <span>Logout</span></button>
        
        </div>
        
        </div>
        <Session/>
        
        
      </div>
        

        
      
       
      )
    } else {
      return ( 
      
        <nav className="nav-style">
  
          <div className="container-nav">
          
          <img src="../../../images/logo.png" alt=""/>
        <div className="item-nav">

            <button className="login"><Link to='/' style={{ textDecoration: 'none' ,color:'white'}}>Login</Link></button>
            <button className="signup"><Link to='/signup' style={{ textDecoration: 'none', color:'white' }}>Signup</Link></button>
          </div>
            
          </div>
        </nav>
      )
    }
  }
}

export default Navbar;