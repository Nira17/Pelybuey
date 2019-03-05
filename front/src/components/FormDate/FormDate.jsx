import React, { Component } from 'react'
import './formDate.css'
import FormService from './form-service';

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
      freeHours: []
    }
    this.service = new FormService();
    this.getFreeHours(props);
  }

  getFreeHours = (props) => {
    this.service.devolCita(props.date.day,props.date.month, props.date.year)
    .then(result => {
      const arrayHours = result.data.map(e => e.hora.split("-")[0]);
      const freeHours = this.state.horas.filter(e => !arrayHours.includes(e));
      this.setState({...this.state, freeHours})
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
          
        });
    })
    .catch( error => console.log(error) )
  }
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  
  // componentWillMount() {
  //   fetch('"http://localhost:5000/api/form"')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then(() => {
  //       this.setState({  })
  //     })
  // }



  render() {
    return (
      <div className="container-cita">
  
        <div className="form-cita">
        <form onSubmit={this.handleFormSubmit}>
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
            this.state.freeHours.map(e => (
              <option value={e}>{e}</option>
            ))
          }
        </select>
      </div>

        <div className="button-cita">
        <input type="submit" value="Enviar"/>
        </div>
      </form>

      </div>
        </div>
      
    )
  }
}