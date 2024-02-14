import { useContext, useEffect, useState } from 'react';
import heartRedIcon from '../../assets/heart-red.svg';
import heartIcon from '../../assets/heart.svg';
import { FavoriteContext, WeatherContext } from '../../context';
export default function AddToFavorite() {
    const { favorites, addToFavorite, removeFromFavorite } =
        useContext(FavoriteContext);
    const { weatherData, loading } = useContext(WeatherContext);
    const { location, longitude, latitude } = weatherData;
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
        if (location) {
            setIsFavorite(
                favorites.some(value => value?.location === location)
            );
        }
    }, [location]);
    const handleFavorite = () => {
        const found = favorites.some(value => value?.location === location);
        if (!found) {
            addToFavorite(location, longitude, latitude );
        } else {
            removeFromFavorite(location);
        }
        setIsFavorite(!isFavorite);
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
