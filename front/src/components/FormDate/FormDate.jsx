import React, { Component } from 'react'
import './formDate.css'

export default class FormDate extends Component {
  render() {
    return (
      <div className="container-cita">
        <div className="form-cita">
        <form action="">
       <div className="prim">
       <p>Motivo de la consulta <input type="Motivo de la consulta"/></p>
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