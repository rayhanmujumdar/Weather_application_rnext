import FavoriteListModal from '../components/Header/FavoriteListModal';
import Favorites from '../components/Header/Favorites';
import Header from '../components/Header/Header';
import SearchLocation from '../components/Header/SearchLocation';

export default function WeatherPages() {
    return (
        <>
            <Header>
                <SearchLocation />
                <Favorites />
                <FavoriteListModal />
            </Header>
        </>
    );
}
