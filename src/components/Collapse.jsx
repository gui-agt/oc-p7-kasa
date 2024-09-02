import React, { useState } from 'react';
import './Collapse.scss';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={handleToggle}>
        {title}
        <span className="collapse__icon">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  );
}

export default Collapse;