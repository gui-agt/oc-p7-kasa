import { useState, useRef } from 'react';
import './collapse.scss';
import toggleClosed from '../assets/toggle_is_closed.svg';
import toggleOpened from '../assets/toggle_is_opened.svg';

// Collapse component: displays a collapsible section with a title and content, allowing the user to toggle between open and closed states.

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button className="collapse__header" onClick={handleToggle}>
                {title}
                <span className="collapse__icon">
                    {isOpen ? (
                        <img src={toggleOpened} alt="toggleOpened"></img>
                    ) : (
                        <img src={toggleClosed} alt="toggleClosed"></img>
                    )}
                </span>
            </button>
            <div
                className={`collapse__content ${isOpen ? 'is-open' : ''}`}
                style={{
                    maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
                }}
                ref={contentRef}
            >
                {content}
            </div>
        </div>
    );
}

export default Collapse;
