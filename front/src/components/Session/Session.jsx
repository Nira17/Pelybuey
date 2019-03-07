import React, { Component } from 'react'
import "./session.css"
import Calendar from '../Calendar/Calendar';
import FormDate from '../FormDate/FormDate';
import { Link } from 'react-router-dom';

export default class Session extends Component {

  state={
    ShowForm :false,date:undefined,
    
  }
  onDayClick = (e, date) => {
   
    this.setState({
      ...this.state,ShowForm:true,date
    })

   
  }

  render() {
    return (
      
        <div>
              <div className="container-session">
              <h5 className="pCita">Elige el día que quieras tu cita</h5>
              <div className="Calendar">
               
                
            
              
              <Calendar onDayClick={(e, date)=> {
                return this.onDayClick(e, date)
              }}/>  
            </div>
            <div className="form-Calendar">
            {this.state.ShowForm?<h1> {this.state.date.day} / {this.state.date.month} / {this.state.date.year}</h1>:undefined}
            {this.state.ShowForm?<h1><FormDate date={this.state.date}/></h1>:undefined}
        </div>
              </div>
            
            
            <div className="Footer-cal">
              <h1> la Mejor Clinica Veterinaria</h1>
              <img src="../../../images/logo.png" alt=""/>
            </div>
            
          
          </div>
          
          
    )
  }
}
