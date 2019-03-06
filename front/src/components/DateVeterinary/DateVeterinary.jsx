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
                      <div className='container-d'>
                      <h1>Usuario:{card.username}</h1>
                      <p>Dia:{card.dia} {card.month} {card.year}</p>
                      <p>Mascota:{card.pet}</p>
                      <p>Motivo:{card.motivo}</p>
                      <p></p>  

                     
        
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
