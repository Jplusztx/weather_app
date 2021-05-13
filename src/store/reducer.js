import {combineReducers} from 'redux'

import {reducer as weatherReducer} from '../pages/weather/store';



const reducer = combineReducers({
  citys: weatherReducer
})

export default reducer;