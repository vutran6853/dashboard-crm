import React from 'react'
import CLOUD from './image/cloud.png'
import MIST from './image/Mist.png'
import RAIN from './image/rain.png'
import CLOUD_THUNDERSTORM from './image/cloud_thunderStorm.png'
import SUN_CLOUD1 from './image/sun_cloud1.png'

function ImgageOfTheWeatherFN(passValue) {
  switch (passValue) {
    case 'Scattered clouds':
      return <img className="weather_img" src={CLOUD_THUNDERSTORM} alt="Cloud_Rain"></img>
    case 'Overcast clouds':
      return <img className="weather_img" src={MIST} alt="Mist"></img>
    case 'Few clouds':
      return <img className="weather_img" src={SUN_CLOUD1} alt="Clear"></img>
    case 'Broken clouds':
      return <img className="weather_img" src={SUN_CLOUD1} alt="Clear"></img>
    case 'Clear Sky':
      return <img className="weather_img" src={SUN_CLOUD1} alt="Haze"></img>
    case 'Light rain':
      return <img className="weather_img" src={RAIN} alt="Rain"></img>
    case 'Moderate rain':
      return <img className="weather_img" src={RAIN} alt="Drizzle"></img>
    case 'Thunderstorm with rain':
      return <img className="weather_img" src={CLOUD_THUNDERSTORM} alt="Thunderstorm"></img>
    default:
      return <img alt="none"></img>
  }
}

export default ImgageOfTheWeatherFN
