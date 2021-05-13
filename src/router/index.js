import React from 'react'
import {Redirect} from 'react-router'

import StartPage from '../pages/start'
import WeatherPage from '../pages/weather'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/start'/>
  },
  {
    path: '/start',
    component: StartPage
  },
  {
    path: '/weather',
    component: WeatherPage
  }
]

export default routes;