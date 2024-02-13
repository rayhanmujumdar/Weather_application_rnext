import { WeatherContext } from '../context';
import { useWeatherData } from '../hooks';

export default function WeatherProvider({ children }) {
    const { loading, error, weatherData } = useWeatherData();
    return (
        <WeatherContext.Provider value={{ loading, error, weatherData }}>
            {children}
        </WeatherContext.Provider>
    );
}
