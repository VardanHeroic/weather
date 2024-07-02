export default function Search({setCity}) {
    return (
        <form onSubmit={e => {e.preventDefault(); setCity(e.target[0].value)}}>
            <input type="text"/>
            <button type="submit">search</button>
        </form>
    )
}
