import './App.css';
import React from 'react'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {days: []}
    }

    componentDidMount = () => {
        const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=Erevan&lang=en&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"
        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                this.setState({days: dailyData})
            } )
    }

    render() {
        console.log(this.state.days);
        return (
            <div className="App">
                <h1 className='title'>Weather in Erevan</h1>
                <div className="row">
                {
                    this.state.days.map((day_data,i) => <Block data={day_data} key={i}/>)
                }

                </div>
            </div>
        )
    }

}

function Block(props) {
    if (props.data) {
        return(
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

export default App;
