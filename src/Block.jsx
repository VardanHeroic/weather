export default function Block(props) {
    if (props.data) {
        return (
            <div className="block">
                <h2>{props.data.dt_txt}</h2>
                <div className="content">
                    <h3>{props.data.weather[0].main}</h3>
                    <span>Temperature: {props.data.main.temp}°C </span><br />
                    <span>Feels like: {props.data.main.feels_like}°C  </span>
                    <h3>Wind</h3>
                    <span>Degree: {props.data.wind.deg}°  </span><br />
                    <span>Speed: {props.data.wind.speed}m/s  </span>
                </div>
            </div>
        )
    }
}
