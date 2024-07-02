import './App.css';
import Weather from './Weather';
import Search from './Search';
import { useState } from 'react';

export default function App() {
    let [city, setCity] = useState('Erevan')

    return (
        <div>
            <Search setCity={setCity}></Search>
            <Weather city={city}></Weather>
        </div>
    )
}
