import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FindCountry from './FindCountry'
import Loader from './Loader'

const WeatherCart = ({ weather, API_KEY }) => {

  const [country, setCountry] = useState()
  const [nameCountry, setNameCountry] = useState(weather.name)
  const [temps, setTemps] = useState()
  const [isCelsius, setIsCelsius] = useState(true)


  const getInfoCountry = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${nameCountry}&appid=${API_KEY}`
    axios.get(url)
      .then((res) => {
        setCountry(res.data)
        const celsius = (res.data.main.temp - 273.15).toFixed(2)
        const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2)
        const newTemps = { celsius, fahrenheit }
        setTemps(newTemps)
      })
      .catch((err) => {
        console.log(err)
        alert("Incorrect city")
      })
  }

  const changeUnitTemp = () => setIsCelsius(!isCelsius)

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameCountry(e.target.searchCountry.value)
  }

  useEffect(() => {
    getInfoCountry()
  }, [nameCountry])

  return (
    <div className='widhtDesktop'>

          <FindCountry 
          country={country}
          temps={temps}
          isCelsius={isCelsius}
          changeUnitTemp={changeUnitTemp}
          handleSubmit={handleSubmit}
          />

    </div>

  )
}

export default WeatherCart