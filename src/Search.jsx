import searchImg from './img/search.png';

export default function Search({setCity}) {
    return (
        <form className="search-form" onSubmit={e => {e.preventDefault(); setCity(e.target[0].value)}}>
            <img className="search-icon" src={searchImg} />
            <input className="search-input" placeholder="Search location..." type="text"/>
            <input type="submit" hidden />
        </form>
    )
}
