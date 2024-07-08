import { useState, useEffect } from 'react'
import Block from './Block'
import CurrentWeatherBlock from './CurrentWeatherBlock'


export default function Weather({ city, isFahrenheit, setIsNotFound }) {
    const [days, setDays] = useState([])
    const [currentWeather, setCurrentWeather] = useState()
    useEffect(() => {
        const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27&cnt=7`
        async function getWeather() {
            try {
                const weather = await fetch(weatherURL)
                const currentWeather = await fetch(currentWeatherURL)
                const weatherJSON = await weather.json()
                const currentWeatherJSON = await currentWeather.json()

                if (weatherJSON.message === 'city not found') {
                    setIsNotFound(true)
                }
                else{
                    setDays(weatherJSON.list)
                    setCurrentWeather(currentWeatherJSON);
                }
            } catch (error) {

            }
        }
        getWeather()
    }, [city])


    function toF(temp) {
        return Math.round(1.8 * temp + 32)
    }

    return (
        <div className="weather">
        {currentWeather ?  <CurrentWeatherBlock toF={toF} isFahrenheit={isFahrenheit} data={currentWeather}/> : <></>}

            <div className="row">
                {
                    days?.map((day_data, i) => <Block toF={toF} isFahrenheit={isFahrenheit} data={day_data} key={i} />)
                }

            </div>
        </div>
    )

}
