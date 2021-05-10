import * as actionTypes from './constants';
import {getCityTemperature} from '../../../service/weather';

export function getCityAction(id){
  return dispatch => {
    getCityTemperature(id).then(res => {
      console.log("getCityAction", res.data)
      dispatch(changeCityAction(res.data));
    })
  }
}

function changeCityAction(city){
  return {
    type: actionTypes.GET_CITY_TEMPERATURE,
    city
  }
}