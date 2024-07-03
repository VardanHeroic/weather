export default function Switch({setisFahrenheit}) {
    return (
        <label className="switch">
            <input type="checkbox" name="" onChange={e => setisFahrenheit(e.target.checked)} />
            <span className="slider"></span>
        </label>
    )
}
