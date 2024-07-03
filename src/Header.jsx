import Switch from "./Switch"

export default function({setisFahrenheit}) {
    return (
        <header>
            <div className="metric">
                <span>°C</span>
                <Switch setisFahrenheit={setisFahrenheit}></Switch>
                <span>°F</span>
            </div>
        </header>
    )
}
