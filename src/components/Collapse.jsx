import { useState } from 'react';
import './Collapse.scss';
import toggleClosed from '../assets/toggle_is_closed.svg'
import toggleOpened from '../assets/toggle_is_opened.svg'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={handleToggle}>
        {title}
        <span className="collapse__icon">{isOpen ? 
          <img src={toggleOpened} alt="toggleOpened"></img> : 
          <img src={toggleClosed} alt="toggleOpened"></img>}
        </span>
      </button>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;