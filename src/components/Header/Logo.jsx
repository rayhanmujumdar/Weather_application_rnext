import headerLogo from '../../assets/logo.svg';
export default function Logo() {
    return (
        <a href="./index.html">
            <img className="h-9" src={headerLogo} alt="Weather App" />
        </a>
    );
}
