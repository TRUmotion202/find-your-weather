import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import WeatherCart from './components/WeatherCart'

function App() {
  const API_KEY = "daaf0d9dcc1f13de4082859b9626592f"
  
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()

  const success = (e) => {
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude
    }
    setCoords(newCoords) 
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])
  
  useEffect(() => {
    if(coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
      axios.get(URL)
        .then(res => setWeather(res.data)
        )
        .catch(err => console.log(err))
    }
  
  }, [coords])
  
  return (
    <div className="App">
      {
        weather ? (<WeatherCart 
          API_KEY={API_KEY}
          weather={weather} 
          />
        ) : <Loader />
      }
    <footer>Developed by Omar</footer>
    </div>
  )
}

export default App
