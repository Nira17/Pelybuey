import React, { Component } from 'react'
import './formDate.css'
import FormService from './form-service';

export default class FormDate extends Component {
  
  constructor(props){
    super(props)
    this.state ={username:"",dia:"",motivo:"",hora:""}
    this.service = new FormService();

  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const dia = this.state.dia;
    const motivo = this.state.motivo;
    const hora = this.state.hora;
  
    this.service.signup(username, dia ,motivo, hora)
    .then( response => {
        this.setState({
            username: "", 
            dia: "",
            motivo:"",
            hora: ""
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    return (
      <div className="container-cita">
        <div className="form-cita">
        <form action="" >
      <div className="prim">
      {/* <input type="text" name="username"/>
      <input  type="text" name="day"/> */}
      <p>Motivo de la consulta 
        <input className="textarea" type ="Motivo de la consulta"/>
        </p>
        
        

      </div>
      <div className="segund">
      <p>Elige  una hora</p><select>
          
          <option value="primera">9:00-10:00</option>
          <option value="segunda">10:00-11:00</option>
          <option value="tercera">11:00-12:00</option>
          <option value="cuarta">12:00-13:00</option>
        </select>
      </div>

        <div className="button-cita">
        <button>Confirma</button></div>
      
      </form>

      </div>
        </div>
      
    )
  }
}