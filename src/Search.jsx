import searchImg from './img/search.png';
import { useRef } from 'react';
import "./css/Search.css"

export default function Search({setCity, isNotFound, setIsNotFound}) {
    const searchInput = useRef(null)

    if(isNotFound){
        searchInput.current.value = ''
    }

    return (
        <form className="search-form" onSubmit={e => {e.preventDefault(); setCity(e.target[0].value);setIsNotFound(false)  }}>
            <img className="search-icon" src={searchImg} />
            <input ref={searchInput} className={isNotFound ? "search-input search-input-error" : "search-input" } placeholder="Search location..." type="text"/><br/>
            {isNotFound ? <span className="search-error">City not found</span> : <></>}
            <input type="submit" hidden />
        </form>
    )
}
