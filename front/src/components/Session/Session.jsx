import React, { Component } from 'react'
import "./session.css"
import Calendar from '../Calendar/Calendar';
import FormDate from '../FormDate/FormDate';

export default class Session extends Component {

  state={
    ShowForm :false,day:undefined
  }
  onDayClick = (e, day) => {
   
    this.setState({
      ...this.state,ShowForm:true,day
    })

   
  }

  render() {
    return (
      <div>
            <div className="container-session">
            <div className="Calendar">
            <Calendar onDayClick={(e, day)=> this.onDayClick(e, day)}/>  
           </div>
           <div className="form-Calendar">
          {this.state.ShowForm?<h1> Dia {this.state.day}</h1>:undefined}
          {this.state.ShowForm?<h1><FormDate/></h1>:undefined}
      </div>
            </div>
          
          
           <div className="Footer-cal">
             <h1> la Mejor Clinica veterinaria</h1>
             <img src="../../../images/logo.png" alt=""/>
           </div>
           
         
         </div>
         
          
    )
  }
}
