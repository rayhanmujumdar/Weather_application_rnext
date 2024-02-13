import { useEffect, useState } from 'react';

export default function useWeatherData() {
    const [loading, setLoading] = useState({ state: false, message: '' });
    const [error, setError] = useState('');
    const [weatherData, setWeatherData] = useState({
        location: '',
        climate: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: '',
        humidity: '',
        cloudPercentage: '',
        wind: '',
        time: '',
        longitude: '',
        latitude: '',
    });
    useEffect(() => {
        let ignore = false;
        const fetchWeatherData = async (longitude, latitude) => {
            try {
                setLoading({
                    ...loading,
                    state: true,
                    message: 'fetching started',
                });
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
                        import.meta.env.VITE_WEATHER_API_KEY
                    }&units=metric`
                );
                if (!response.ok) {
                    throw new Error(
                        'Fetching Weather data does not found, something wrong'
                    );
                }
                const data = await response.json();
                if (!ignore) {
                    setWeatherData({
                        ...weatherData,
                        location: data?.name,
                        climate: data?.weather[0]?.main,
                        temperature: data?.main?.temp,
                        maxTemperature: data?.main?.temp_max,
                        minTemperature: data?.main?.temp_min,
                        humidity: data?.main?.humidity,
                        cloudPercentage: data?.clouds?.all,
                        wind: data?.wind?.speed,
                        time: data?.dt,
                        longitude: longitude,
                        latitude: latitude,
                    });
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading({
                    ...loading,
                    state: false,
                    message: '',
                });
            }
        };
        setLoading(prev => {
            return {
                ...prev,
                state: true,
                message: 'fetching with geolocation',
            };
        });
        navigator.geolocation.getCurrentPosition(position => {
            fetchWeatherData(
                position.coords.longitude,
                position.coords.latitude
            );
        });
        return () => {
            ignore = true;
        };
    }, []);
    return { loading, error, weatherData };
}
