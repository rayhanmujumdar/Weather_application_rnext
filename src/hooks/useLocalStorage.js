import { useEffect, useState } from 'react';

export default function useLocalStorage(storeKey, defaultValue) {
    const [favorite, setFavorite] = useState(
        JSON.parse(localStorage.getItem(storeKey)) ?? defaultValue
    );
    useEffect(() => {
        localStorage.setItem(storeKey, JSON.stringify(favorite));
    }, [favorite]);
    return [favorite, setFavorite];
}
