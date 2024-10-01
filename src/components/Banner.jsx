import './banner.scss';

// Banner component: displays a banner with an image background and text, supporting dark mode.

function Banner({ image, text, darkMode }) {
    return (
        <div
            className={`banner ${darkMode ? 'banner--dark' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="banner__content">
                <h2 className="banner__content--text">{text}</h2>
            </div>
        </div>
    );
}

export default Banner;
