import WeatherPages from './pages/WeatherPage';
import FavoriteProvider from './provider/FavoriteProvider';
import LocationProvider from './provider/LocationProvider';
import WeatherProvider from './provider/WeatherProvider';

function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavoriteProvider>
                    <WeatherPages />
                </FavoriteProvider>
            </WeatherProvider>
        </LocationProvider>
    );
}

export default App;
