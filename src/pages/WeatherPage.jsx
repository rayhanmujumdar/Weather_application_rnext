import FavoriteListModal from '../components/Header/FavoriteListModal';
import Favorites from '../components/Header/Favorites';
import Header from '../components/Header/Header';
import SearchLocation from '../components/Header/SearchLocation';
import AddToFavorite from '../components/WeatherBoard/AddToFavorite';
import WeatherBoard from '../components/WeatherBoard/WeatherBoard';
import WeatherCondition from '../components/WeatherBoard/WeatherCondition';
import WeatherHeadline from '../components/WeatherBoard/WeatherHeadline';

export default function WeatherPages() {
    return (
        <>
            <Header>
                <SearchLocation />
                <Favorites />
                <FavoriteListModal />
            </Header>
            <WeatherBoard>
                <AddToFavorite />
                <WeatherHeadline />
                <WeatherCondition />
            </WeatherBoard>
        </>
    );
}
