import spotImg from './img/spot.png'
import scaleImg from './img/scale.png'
import { getIconName } from './GetIconName'

export default function CurrentWeatherBlock({ data, toF, isFahrenheit }) {
    const date = new Date()
    console.log(date.getDay());
    if (data) {
        return (
            <div className="currentWeatherBlock">
                <div className="currentWeatherBlock-header">
                    <span className="currentWeatherBlock-location">{data.name}</span>
                    <img src={spotImg} alt="" className="currentWeatherBlock-spot"/>
                </div>
                <div className="currentWeatherBlock-main">
                    <span className="currentWeatherBlock-date">{`${date.toLocaleString('default', { month: 'short' })} ${date.getDate()}, ${date.toLocaleString('default', { weekday: 'short' })}`}</span>
                    <span className="currentWeatherBlock-temperature">
                        <img src={scaleImg} alt=""/>
                        {isFahrenheit ? toF(data.main.temp)+'°F' : Math.round(data.main.temp)+'°C'}
                        <img className='currentWeatherBlock-icon' src={require('./img/'+getIconName(data.weather[0].icon))} alt=""/>
                    </span>
                </div>
                <div className="currentWeatherBlock-footer">
                    <table className="currentWeatherBlock-table">
                        <tr>
                            <th>Humidity</th>
                            <th>Visibality</th>
                            <th>Air pressure</th>
                            <th>Wind</th>
                        </tr>
                        <tr>
                            <th>{data.main.humidity}%</th>
                            <th>{data.visibility/1000}km</th>
                            <th>{data.main.pressure}hPa</th>
                            <th>{data.wind.speed}m/s</th>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
