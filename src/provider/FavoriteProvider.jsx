import { FavoriteContext } from '../context';
import { useLocalStorage } from '../hooks';

export default function FavoriteProvider({ children }) {
    const [favorites, setFavorite] = useLocalStorage('favorites', []);
    const addToFavorite = (location, longitude, latitude) => {
        setFavorite([...favorites, { location, longitude, latitude }]);
    };

    const removeFromFavorite = location => {
        const filterWeatherData = favorites.filter(
            favWeather => favWeather?.location !== location
        );
        setFavorite([...filterWeatherData]);
    };
    return (
        <FavoriteContext.Provider
            value={{ favorites, addToFavorite, removeFromFavorite }}
        >
            {children}
        </FavoriteContext.Provider>
    );
}
