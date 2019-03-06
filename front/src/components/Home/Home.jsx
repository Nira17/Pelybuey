import React, { Component } from 'react'
import './home.css'
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import { Switch, Route } from 'react-router-dom';



export default class Home extends Component {
  


  render() {
    
    return (
        
      <div  className='container-home'>
              <hr></hr>
            <div className="home">
            <div className="p-home">
            
            <h1>Cuidamos Curamos Acompañamos</h1>
            <p>Tu fiel compañero ,es nuestra prioridad, puedes pedir consulta directamente y sin preocupaciones.Te enviaremos un correo de confirmación para que ninguno de los dos espere más de lo necesario.</p>
            </div>
            <div className="p-home2">
            <div>
              
            </div>
      
            <Switch> 
            <Route exact path='/' render={() => <Login getUser={this.props.getUser}/>}/>
            <Route exact path='/signup' render={() => <Signup getUser={this.props.getUser}/>}/>
            </Switch>
            </div>
            
        
            </div>
            
            <div className="footer">
            
            </div>  
      </div>

    )
}
}
