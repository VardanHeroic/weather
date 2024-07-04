export default function CurrentWeatherBlock({data}) {
    return (
        <div className="currentWeatherBlock">
        {JSON.stringify(data)}
        </div>
    )
}
