import React from 'react'

const FindCountry = ({ country, temps, isCelsius, changeUnitTemp, handleSubmit}) => {
  return (
    <section>
      <h1 className='tittle-weather'>Weather section</h1>

      <div className='container'>
        <div className="content__section1">
          <form className='content__form' onSubmit={handleSubmit}>
            <div>
              <label htmlFor=""></label>
              <input className='content__input' id='searchCountry' type="text" placeholder='Search Country' />
            </div>
            <button className='button'>Search</button>
          </form>
          <h2 className='content__place'>{country?.name}, {country?.sys.country}</h2>

          <div className='content__weather-img pulse' >
            <img src={`http://openweathermap.org/img/wn/${country?.weather[0].icon}@4x.png`} alt="icon weather" />
          </div>

          <h3 className='content__temp'>{isCelsius ? temps?.celsius + "ºC" : temps?.fahrenheit + "ºF"}</h3>
        </div>
        <div className="content__section2">
          <ul className='content__data'>
            <li className='content__description'>{country?.weather[0].main}, {country?.weather[0].description}</li>
            <li className='content__wind'><i className='bx bx-wind'></i> <b>Wind speed:</b> {country?.wind.speed} m/s</li>
            <li className='content__clouds'><i className='bx bxl-soundcloud' ></i> <b>Clouds:</b> {country?.clouds.all}%</li>
            <li className='content__pressure'><i className='bx bxs-thermometer'></i> <b>Pressure:</b> {country?.main.pressure} hPa</li>
          </ul>
          <div className='button-temps'>
            <button className='button' onClick={changeUnitTemp}>ºC | ºF</button>
          </div>

        </div>

      </div>
    </section >
  )
}

export default FindCountry