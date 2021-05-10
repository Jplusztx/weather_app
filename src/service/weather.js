import axios from 'axios';

export function getCityTemperature(id){
  return axios({
    url: 'http://localhost:8888',
    params: {
      id
    }
  })
}