import * as actionTypes from './constants';

let defaultState = {
  city: {}
}

function reducer(state = defaultState, action){
  switch(action.type){
    case actionTypes.GET_CITY_TEMPERATURE: return {...state, city: action.city};
    default: return state;
  }
}

export default reducer;