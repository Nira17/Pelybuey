import axios from 'axios';

class FormService {
  constructor() {
    let service = axios.create({
      //baseURL: `${process.env.API_URL}/api`,
      baseURL: "http://localhost:5000/form",
      withCredentials: true
    });
    this.service = service;
}
 form = (username,dia,motivo,hora) => {
    return this.service.post('/form',{username,dia,motivo,hora})
    .then(response => response.data)
    }


}

export default FormService;