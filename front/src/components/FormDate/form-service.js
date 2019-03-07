import axios from 'axios';

class FormService {
    
    constructor() {
        let service = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/api`,
            // baseURL: "http://localhost:5000/api/",
            withCredentials: true
        });
        this.service = service;
    }
    form = (username, dia, month, year,pet, motivo, hora) => {
        const payload = {
            username,
            dia,
            month,
            year,
            motivo,
            pet,
            hora
        }
        console.log(payload);
        
        return this.service.post('/form', payload)
            .then(response => response.data)
    }

    devolCita = (dia, month, year) => {
        return this.service.post('/hours', {dia, month, year})
        .then(response => response.data)
    }
    getAllveterinary =(data)=> {
        console.log("hola")
        return this.service.get('/allCard',data)
        .then(response => response.data)
    }
}

export default FormService;