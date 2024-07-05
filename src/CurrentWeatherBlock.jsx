import spotImg from './spot.png'
import scaleImg from './scale.png'

export default function CurrentWeatherBlock({ data, toF, isFahrenheit }) {
    const date = new Date()
    if (data) {
        return (
            <div className="currentWeatherBlock">
                {console.log(JSON.stringify(data, null, 4))}
                <div className="currentWeatherBlock-header">
                    <span className="currentWeatherBlock-location">{data.name}</span>
                    <img src={spotImg} alt="" className="currentWeatherBlock-spot"/>
                </div>
                <div className="currentWeatherBlock-main">
                    <span className="currentWeatherBlock-date">{`${date.toLocaleString('default', { month: 'short' })} ${date.getDay()}, ${date.toLocaleString('default', { weekday: 'short' })}`}</span>
                    <span className="currentWeatherBlock-temperature">
                        <img src={scaleImg} alt=""/>
                        {isFahrenheit ? toF(data.main.temp)+'°F' : Math.round(data.main.temp)+'°C'}
                    </span>
                </div>
                <div className="currentWeatherBlock-footer">

                </div>
            </div>
        )
    }
}
