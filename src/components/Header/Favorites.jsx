import heartIcon from '../../assets/heart.svg';
export default function Favorites() {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
            <img src={heartIcon} alt="heart-icon" />
            <span>Favourite Locations</span>
        </div>
    );
}
