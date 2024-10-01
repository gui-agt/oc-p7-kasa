import './slideshow.scss';
import { useState } from 'react';
import leftArrow from '../assets/arrow_left.svg';
import rightArrow from '../assets/arrow_right.svg';

// Slideshow component: displays a series of images in a slideshow format.

function Slideshow({ pictures, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1,
        );
    };

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1,
        );
    };

    // Function to display nothing if there's only one image
    if (pictures.length === 1) {
        return (
            <div className="slideshow">
                <img
                    src={pictures[0]}
                    alt={`photographie ${currentIndex + 1} logement ${title}`}
                    className="slideshow__image"
                />
            </div>
        );
    }

    return (
        <div className="slideshow">
            <div
                className="slideshow__container"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {pictures.map((pic, index) => (
                    <img
                        key={index}
                        src={pic}
                        alt={`photographie ${
                            currentIndex + 1
                        } logement ${title}`}
                        className="slideshow__image"
                    />
                ))}
            </div>

            <div className="slideshow__controls">
                <button
                    className="slideshow__control slideshow__control--prev"
                    onClick={prevSlide}
                    aria-label="Image précédente"
                >
                    <img src={leftArrow} alt="" />
                </button>
                <button
                    className="slideshow__control slideshow__control--next"
                    onClick={nextSlide}
                    aria-label="Image suivante"
                >
                    <img src={rightArrow} alt="" />
                </button>
            </div>
            <div className="slideshow__counter">
                {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    );
}
export default Slideshow;
