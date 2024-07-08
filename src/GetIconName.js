export function getIconName(icon) {
    switch (icon) {
        case '01d':
        case '01n':
            return 'sun.png'
        case '02d':
        case '02n':
            return 'cloudy.png'
        case '03d':
        case '03n':
        case '04d':
        case '04n':
        case '50n':
        case '50d':
            return 'clouds.png'
        case '09n':
        case '09d':
        case '10n':
        case '10d':
            return 'rain.png'
        case '11d':
        case '11n':
            return 'storm.png'
        case '13d':
        case '13n':
            return 'snow.png'
    }
}
