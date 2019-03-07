import React, { Component } from 'react'
import FormService from '../FormDate/form-service';
import './dateVeterinary.css'



export default class DateVeterinary extends Component {

  constructor(props){
    super(props)
    this.state ={
      veterinarioArray:[]
      
      
    
    }
    this.service = new FormService();
    this.getVeterinary()
  }
  
  getVeterinary =(username)=>{
    this.service.getAllveterinary()
    .then((veterinario)=>{
    
    this.setState({...this.state,veterinarioArray:veterinario})
    console.log(this.state.veterinarioArray, 'aqui')
    
    })
    
  }
  
  



  render() {
    return (

      <div>
     <div>
          {
              this.state.veterinarioArray.map((card, index) =>{
                
                  return(
                    
                  <div className="cards">
                    <div className='container-h1'>
                      <h1>Usuario:{card.username}</h1>
                    </div>
                    <div className="text-card">
                      <h5>Dia:{card.dia} {card.month} {card.year}</h5>
                      <h5>Mascota:{card.pet}</h5>
                      <h5>hora:{card.hora}</h5>
                      <h5>Motivo:{card.motivo}</h5>
                    </div>
                  </div>

                      
                  )
              })
          }
      </div>
  </div>
    )

  }
}
