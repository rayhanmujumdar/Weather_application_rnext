import WeatherPages from './pages/WeatherPage';
import WeatherProvider from './provider/WeatherProvider';

function App() {
    return (
        <WeatherProvider>
            <WeatherPages />
        </WeatherProvider>
    );
}

export default App;
