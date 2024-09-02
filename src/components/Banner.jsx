import './banner.scss';

function Banner({ image, text, darkMode }) {
    return (
        <div className={`banner ${darkMode ? 'banner--dark' : ''}`} style={{ backgroundImage: `url(${image})` }}>
            <div className="banner__content">
                <h2>{text}</h2>
            </div>
        </div>
    );
}

export default Banner;
