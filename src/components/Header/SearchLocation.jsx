import { useContext } from 'react';
import searchIcon from '../../assets/search.svg';
import { LocationContext } from '../../context';
import { getLocationDataBySearch } from '../../data/location-data';
import { useDebounce } from '../../hooks';
export default function SearchLocation() {
    const { setSelectedLocation } = useContext(LocationContext);

    // every key change to see search result
    const handleChange = useDebounce(e => {
        const value = e.target.value;
        if (value) {
            const searchResult = getLocationDataBySearch(value);
            setSelectedLocation(searchResult);
        }
    }, 500);
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    onChange={handleChange}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search"
                    placeholder="Search Location"
                    required
                />
                <button type="submit">
                    <img src={searchIcon} />
                </button>
            </div>
        </form>
    );
}
