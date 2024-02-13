import { FavoriteContext } from '../context';
import { useLocalStorage } from '../hooks';

export default function FavoriteProvider({ children }) {
    const [favorites, setFavorite] = useLocalStorage('favorites', []);
    return (
        <FavoriteContext.Provider value={{ favorites, setFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}
