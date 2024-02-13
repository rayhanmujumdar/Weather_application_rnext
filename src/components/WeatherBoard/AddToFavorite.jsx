import { useContext, useState } from 'react';
import heartRedIcon from '../../assets/heart-red.svg';
import heartIcon from '../../assets/heart.svg';
import { FavoriteContext, WeatherContext } from '../../context';
export default function AddToFavorite() {
    const { favorites, setFavorite } = useContext(FavoriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { location, longitude, latitude } = weatherData;
    const [isFavorite, setIsFavorite] = useState(
        favorites.some(value => value.location === location)
    );
    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            setFavorite([...favorites, { location, longitude, latitude }]);
        } else {
            const filterWeatherData = favorites.filter(
                favWeather => favWeather?.location !== location
            );
            setFavorite([...filterWeatherData]);
        }
    };
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={handleFavorite}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                >
                    <span>Add to Favourite</span>
                    <img
                        src={isFavorite ? heartRedIcon : heartIcon}
                        alt="heart-icon"
                    />
                </button>
            </div>
        </div>
    );
}
