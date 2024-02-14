import { useContext, useState } from 'react';
import FavoriteListModal from '../components/Header/FavoriteListModal';
import Favorites from '../components/Header/Favorites';
import Header from '../components/Header/Header';
import SearchLocation from '../components/Header/SearchLocation';
import AddToFavorite from '../components/WeatherBoard/AddToFavorite';
import WeatherBoard from '../components/WeatherBoard/WeatherBoard';
import WeatherCondition from '../components/WeatherBoard/WeatherCondition';
import WeatherHeadline from '../components/WeatherBoard/WeatherHeadline';
import { WeatherContext } from '../context';

import ClearSkyImage from '../assets/backgrounds/clear-sky.jpg';
import FewCloudsImage from '../assets/backgrounds/few-clouds.jpg';
import MistImage from '../assets/backgrounds/mist.jpeg';
import RainyDayImage from '../assets/backgrounds/rainy-day.jpg';
import ScatterdCloudsImage from '../assets/backgrounds/scattered-clouds.jpg';
import SnowImage from '../assets/backgrounds/sunny.jpg';
import ThunderStormImage from '../assets/backgrounds/thunderstorm.jpg';
import WinterImage from '../assets/backgrounds/winter.jpg';

export default function WeatherPages() {
    const { loading, weatherData } = useContext(WeatherContext);
    const [showModal, setShowModal] = useState(false);
    function getBackgroundImage(climate) {
        switch (climate) {
            case 'Rain':
                return RainyDayImage;
            case 'Clouds':
                return ScatterdCloudsImage;
            case 'Clear':
                return ClearSkyImage;
            case 'Snow':
                return SnowImage;
            case 'Thunder':
                return ThunderStormImage;
            case 'Fog':
                return WinterImage;
            case 'Haze':
                return FewCloudsImage;
            case 'Mist':
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }
    return (
        <div
            style={{
                backgroundImage: `url(${getBackgroundImage(
                    weatherData.climate
                )})`,
            }}
            className="bg-no-repeat bg-cover"
        >
            <Header>
                <SearchLocation />
                <Favorites onShow={setShowModal} />
                {showModal && <FavoriteListModal />}
            </Header>
            {loading.state ? (
                <div className="w-96 p-8 bg-gray-200 m-5 rounded-md mx-auto">
                    <p className="text-xl text-center">{loading.message}</p>
                </div>
            ) : (
                <WeatherBoard>
                    <AddToFavorite />
                    <WeatherHeadline />
                    <WeatherCondition />
                </WeatherBoard>
            )}
        </div>
    );
}
