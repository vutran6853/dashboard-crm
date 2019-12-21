import React, { Component, useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import ImgageOfTheWeatherFN from './WeatherImage'
// import testReducer, { initialState, whatupAction } from './testReducer'
import './weather.scss'

function Weather(props) {
  let [weatherCurrentTime, setWeatherCurrentTime] = useState({})
  let [weatherHourly, setWeatherHourly] = useState({})
  let [zipcode, setZipcode] = useState({
    defaultZipcode: process.env.REACT_APP_DEFAULT_ZIPCODE,
    newZipcode: ''
  })
  // let [state, dispatch] = useReducer(testReducer, initialState)

  useEffect(() => {
    axios
      .get(
        `https://api.weatherbit.io/v2.0/current?&postal_code=${zipcode.defaultZipcode}&key=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((response) => setWeatherCurrentTime({ weatherCurrentTime: response.data.data }))
      .catch((err) => console.log('%c Unable able to fetch data in weatherCurrentTime ', err))
  }, [zipcode.defaultZipcode])

  useEffect(() => {
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?&postal_code=${zipcode.defaultZipcode}&key=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then((response) => {
        let result = []
        response.data.data.map((value, index) => {
          return result.push({
            min_temp: Math.round((value.min_temp * 9) / 5 + 32),
            max_temp: Math.round((value.max_temp * 9) / 5 + 32),
            temp: Math.round((value.temp * 9) / 5 + 32),
            date: value.datetime,
            type: value.weather.description
          })
        })
        setWeatherHourly({ weatherHourly: result })
      })
      .catch((err) => console.log('%c Unable able to fetch data in weatherHourly ', err))
  }, [zipcode.defaultZipcode])

  const conventF = () => {
    if (weatherCurrentTime.weatherCurrentTime !== undefined) {
      return Math.round((weatherCurrentTime.weatherCurrentTime[0].temp * 9) / 5 + 32)
    }
    return 'Loading...'
  }

  const handleSetNewZipcode = (e) => {
    setZipcode({
      ...zipcode,
      newZipcode: e.target.value
    })
  }

  const handleFetchNewWeather = () => {
    if (parseInt(zipcode.newZipcode)) {
      setZipcode({
        ...zipcode,
        defaultZipcode: zipcode.newZipcode,
        newZipcode: ''
      })
    } else {
      alert('Please enter vaild zip code')
      setZipcode({
        ...zipcode,
        newZipcode: ''
      })
    }
  }

  const renderCity = weatherCurrentTime.weatherCurrentTime ? weatherCurrentTime.weatherCurrentTime[0].city_name : null

  const renderHourlyWeather = weatherHourly.weatherHourly
    ? weatherHourly.weatherHourly.map((value, index) => {
        // console.log('value', value.type)
        return (
          <div key={value.date}>
            <p>
              {value.date} is {value.temp} / low {value.min_temp} / hight {value.max_temp}
            </p>
            {ImgageOfTheWeatherFN(value.type)}
          </div>
        )
      })
    : null

  return (
    <div className="weather_container">
      <div>
        <input
          type="text"
          placeholder="Enter zipcode..."
          value={zipcode.newZipcode}
          onChange={handleSetNewZipcode}
          maxLength={6}
        />
        <button onClick={handleFetchNewWeather}>Submit</button>
      </div>
      <div>
        <p>
          My temp is {conventF()} in {renderCity}{' '}
        </p>
      </div>
      <div>
        <p>Range this week or hourly is</p>
        {renderHourlyWeather}
      </div>
    </div>
  )
}

export default Weather
