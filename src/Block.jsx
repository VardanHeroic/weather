export default function Block({data, isFahrenheit}) {
    function toF(temp) {
       return Math.round((1.8*temp +32)*100)/100
    }

    if (data) {
        return (
            <div className="block">
                <h2>{data.dt_txt}</h2>
                <div className="content">
                    <h3>{data.weather[0].main}</h3>
                    <span>Temperature: {isFahrenheit ? toF(data.main.temp)+'°F' : data.main.temp+'°C'} </span><br />
                    <span>Feels like: {isFahrenheit ? toF(data.main.feels_like)+'°F' : data.main.feels_like+'°C'}  </span>
                    <h3>Wind</h3>
                    <span>Degree: {data.wind.deg}°  </span><br />
                    <span>Speed: {data.wind.speed}m/s  </span>
                </div>
            </div>
        )
    }
}
