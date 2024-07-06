import { useState, useEffect } from 'react'
import Block from './Block'
import CurrentWeatherBlock from './CurrentWeatherBlock'


export default function Weather({ city, isFahrenheit }) {
    const [days, setDays] = useState([])
    const [currentWeather, setCurrentWeather] = useState()
    useEffect(() => {
        const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27&cnt=7`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                setDays(data.list)
            })
        fetch(currentWeatherURL)
            .then(res => res.json())
            .then(data => {
                setCurrentWeather(data);
            })
    },[city])


    function toF(temp) {
       return Math.round(1.8*temp +32)
    }

    return (
        <div className="weather">
            <CurrentWeatherBlock toF={toF} isFahrenheit={isFahrenheit} data={currentWeather} />
            <div className="row">
                {
                    days.map((day_data, i) => <Block toF={toF} isFahrenheit={isFahrenheit} data={day_data} key={i} />)
                }

            </div>
        </div>
    )

}
