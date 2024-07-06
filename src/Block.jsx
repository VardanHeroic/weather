export default function Block({data, isFahrenheit, toF}) {
    const date = new Date(data.dt * 1000)
    if (data) {
        return (

            <div className="block">
                <div className="block-blackthing"></div>
                <span className="block-time">{date.getHours()+':00'}</span>
            </div>
        )
    }
}
