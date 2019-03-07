import React, { Component } from 'react'
import './formDate.css'
import FormService from './form-service';
import Redirect from 'react-router-dom/Redirect';

export default class FormDate extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      username:"",
      dia:"",
      month:"",
      year:"",
      pet:"",
      motivo:"",
      hora:"",
      horas:["9:00","10:00","11:00","12:00"],
      freeHours: [],
      show:false,
      redirect:false
    
    }
    this.service = new FormService();
    this.getFreeHours(props);
  }

  getFreeHours = (props) => {
    this.service.devolCita(props.date.day,props.date.month, props.date.year)
    .then(result => {
      const arrayHours = result.data.map(e => e.hora);
      const freeHours = this.state.horas.filter(e => !arrayHours.includes(e));
      this.setState({...this.state, freeHours, hora: freeHours[0]})
    })
    .catch(err => {})
  }

  componentWillReceiveProps(nextProps) {
    this.getFreeHours(nextProps);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const dia = this.props.date.day;
    const month = this.props.date.month;
    const year = this.props.date.year;
    const pet = this.state.pet;
    const motivo = this.state.motivo;
    const hora = this.state.hora;

    this.service.form(username, dia ,month,year,pet,motivo,hora)
    .then( response => {
      console.log(response);
        this.setState({
            username: "", 
            dia: "",
            month:"",
            year:"",
            pet:"",
            motivo:"",
            hora: "",
            show:true,
            redirect:true
          
        });
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
        {!this.state.show  ? <form onSubmit={this.handleFormSubmit}>
        <div className="prim">
        <p>Nombre de la mascota
        <input className="textarea" name="pet" onChange={this.handleChange} type ="Nombre de la mascota"/>
        </p>
        
        <p>Motivo de la consulta 
        <input className="textarea" name="motivo" onChange={this.handleChange} type ="Motivo de la consulta"/>
        </p>
        
        

          </div>
          <div className="segund">
      <p>Elige  una hora</p>
      <select name="hora" onChange={this.handleChange}>
          {
            this.state.freeHours.map((e,index) => (
              <option key={index} value={e}>{e}</option>
            ))
          }
        </select>
      </div>

       
  <button className="button-cita" type="submit" value="Enviar">Enviar</button>
        
      </form>
        : <h1 className="ok">Genial!,tu cita está confirmada</h1>
        

        }
        

        

      </div>
        </div>
      
    )
  }
}