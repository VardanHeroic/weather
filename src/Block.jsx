import { getIconName } from "./GetIconName.js"

export default function Block({ data, isFahrenheit, toF }) {
    const date = new Date(data.dt * 1000)
    return (
        <div className="block">
            <div className="block-blackthing"></div>
            <div className="block-time">{date.getHours() + ':00'}</div>
            <img className="block-icon" src={require('./img/' + getIconName(data.weather[0].icon))} alt="" />
            <div className="block-temperature">{isFahrenheit ? toF(data.main.temp) : Math.round(data.main.temp)}°</div>
        </div>
    )
}
