import React, { Component, useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import cloud from './image/cloud.png'
import Mist from './image/Mist.png'
import Rain from './image/rain.png'
import Thunderstorm from './image/cloud_thunderStorm.png'
// import testReducer, { initialState, whatupAction } from './testReducer'
import './weather.scss'

function Weather(props) {
  let [weatherCurrentTime, setWeatherCurrentTime] = useState({})
  let [weatherHourly, setWeatherHourly] = useState({})
  let [mee2, setMee2] = useState([])
  // let [state, dispatch] = useReducer(testReducer, initialState)

  useEffect(() => {
    console.log('enter weather component')
    let zipCode = 78660
    axios.get(`https://api.weatherbit.io/v2.0/current?&postal_code=${ zipCode }&key=${ process.env.REACT_APP_WEATHER_KEY }`)
    .then((response) => setWeatherCurrentTime({ weatherCurrentTime: response.data.data }))
    .catch((err) => console.log('%c Unable able to fetch data in weatherCurrentTime ', err))
  }, [])

  useEffect(() => {
    let zipCode = 78660
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${ zipCode }&key=${ process.env.REACT_APP_WEATHER_KEY }`)
    .then((response) => {
      let result = []
      response.data.data.map((value, index) => {
            // console.log('value', value.weather.description)

        result.push({
          min_temp: Math.round(value.min_temp * 9/5 + 32),
          max_temp: Math.round(value.max_temp * 9/5 + 32),
          temp: Math.round(value.temp * 9/5 + 32),
          date: value.datetime,
          type: value.weather.description
        })
      })
      setWeatherHourly({ weatherHourly: result })
    })
    .catch((err) => console.log('%c Unable able to fetch data in weatherHourly ', err))
  }, [])

  const conventF = () => {
    if (weatherCurrentTime.weatherCurrentTime !== undefined) {
      return Math.round(weatherCurrentTime.weatherCurrentTime[0].temp * 9/5 + 32)
    }
    return 'Loading...'
  }


  const imgageOfTheWeatherFN = (passValue) => {
    // console.log(weatherHourly.weatherHourly)
    console.log(passValue)
    switch (passValue) {
      case 'Scattered clouds': 
        return (
          <img className="weather_img" src={ cloud } alt='Cloud_Rain'></img>
        )
      break
      case 'Overcast clouds':
        return (
          <img className="weather_img" src={ Mist } alt='Mist'></img>
        )
      break
      case 'Few clouds':
        return (
          <img className="weather_img" src={ cloud } alt='Clear'></img>
        )
      break
      // // case '':
      // //   return (
      // //     <img className="weather_img" src={ cloud } alt='Haze'></img>
      // //   )
      // break
      case 'Light rain':
        return (
          <img className="weather_img" src={ Rain } alt='Rain'></img>
        )
      break
      case 'Broken clouds':
        return (
          <img className="weather_img" src={ Rain } alt='Drizzle'></img>
        )
      break
      // case 'Thunderstorm':
      //   return (
      //     <img className="weather_img" src={ Thunderstorm } alt='Thunderstorm'></img>
      //   )
      // break
      default:
        return (
          <img alt="none"></img>
        )
    }
   }

   
  const renderCity = weatherCurrentTime.weatherCurrentTime ? weatherCurrentTime.weatherCurrentTime[0].city_name : ''

  const renderHourlyWeather = weatherHourly.weatherHourly ? weatherHourly.weatherHourly.map((value, index) => {
    // console.log('value', value)

    return (
      <div key={ value.date }>
        <p>{ value.date } is { value.temp } / low { value.min_temp } / hight { value.max_temp }</p>
        <p>{ imgageOfTheWeatherFN(value.type) }</p>
      </div>
    )
  }) : ''

  console.log('weatherHourly', weatherHourly)
  return (
    <div>
      cryptocurrency component
      <p>My temp is { conventF() } in { renderCity } </p>
      <p>Range this week or hourly is</p>
      { renderHourlyWeather }
      {/* { imgageOfTheWeatherFN() } */}
    </div>
  )
}

export default Weather