import './App.css';
import Weather from './Weather';
import Search from './Search';
import Header from './Header'
import { useState } from 'react';

export default function App() {
    let [city, setCity] = useState('Erevan')
    let [isFahrenheit, setisFahrenheit] = useState(false)

    return (
        <div>
            <Header setisFahrenheit={setisFahrenheit}></Header>
            <Search setCity={setCity}></Search>
            <Weather isFahrenheit={isFahrenheit} city={city}></Weather>
        </div>
    )
}
