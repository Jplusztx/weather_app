import React, {memo} from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import {WeatherPageStyled, WeatherStyled} from './style'

export default memo(function WeatherPage() {

  return (
    <WeatherPageStyled className="center">
      <div className="left arrow"></div>
      <WeatherStyled className="weather">
        <h2 className="cityname">Brisbane</h2>
        <div className="show">
          <div className="img"></div>
          <h2 className="now">25°</h2>
          <div className="temperature">
            <div className="low">18°</div>
            <div className="high">29°</div>
          </div>
        </div>
        <h2 className="weathername">
          Thundershowers
        </h2>
      </WeatherStyled>
      <div className="right arrow"></div>
    </WeatherPageStyled>
  )
})
