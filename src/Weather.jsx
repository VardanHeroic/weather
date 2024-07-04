import { useState, useEffect } from 'react'
import Block from './Block'
import CurrentWeatherBlock from './CurrentWeatherBlock'


export default function Weather({ city, isFahrenheit }) {
    const [days, setDays] = useState([])
    const [currentWeather, setCurrentWeather] = useState()
    const [cityName, setCityName] = useState(city)
    useEffect(() => {
        const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
        const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                setCityName(data.city.name)
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                setDays(dailyData)
            })
        fetch(currentWeatherURL)
            .then(res => res.json())
            .then(data => {
                setCurrentWeather(data);
            })
    },[city])

    return (
        <div className="weather">
            <h1 className='title'>{`Weather in ${cityName}`}</h1>
            <CurrentWeatherBlock data={currentWeather} />
            <div className="row">
                {
                    days.map((day_data, i) => <Block isFahrenheit={isFahrenheit} data={day_data} key={i} />)
                }

            </div>
        </div>
    )

}
