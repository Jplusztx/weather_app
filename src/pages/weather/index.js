import React, {memo, useEffect, useState} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {WeatherPageStyled, WeatherStyled} from './style'

import {getCityAction} from './store/actionCreators'

export default memo(function WeatherPage() {

  const [id, setId] = useState(0);
  const [arr, setArr] = useState(new Array(3).fill(false));
  const {city} = useSelector(store => ({
    city: store.citys.city
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCityAction(id))
  }, [dispatch, id]);

  function decrement(){
    if(id === 0) setId(2);
    else setId(id - 1);
  }
  function increment(){
    if(id === 2) setId(0)
    else setId(id + 1)
  }

  function showRefresh(){
    return (
      <div className="show" onClick={e => setArr(arr.map((item,index) => item || (index===id?true:false)))}>
        <div className="refresh"></div>
      </div>
    )
  }
  function showWeather(){
    return (        
    <div className="show">
      <div className="img"></div>
      <h2 className="now">{city.nowTemperature}°</h2>
      <div className="temperature">
        <div className="low">{city.lowestTemperature}°</div>
        <div className="high">{city.maxTemperature}°</div>
      </div>
      <h2 className="weathername">
        {city.weatherName}
      </h2>
    </div>
    )
  }
  console.log("city", city)
  return (
    <WeatherPageStyled className="center">
      <div className="left arrow" onClick={decrement}></div>
      {
        city.name && (
          <WeatherStyled 
            className="weather"
            weather={city}>
            <h2 className="cityname">{city.name}</h2>
            {arr[id] && city?showWeather():showRefresh()}
          </WeatherStyled>
        )
      }
      <div className="right arrow" onClick={increment}></div>
    </WeatherPageStyled>
  )
})
