import React, { useRef } from 'react';
import '../css/TextBox.css';

const TextBox = () => {
  const textBoxRef = useRef(null);

  const handleKeyDown = (event) => {
    // Prevent line breaks on Enter key
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    
      <div className="container" id="tb1">
        <div
          className="text-box"
          contentEditable
          ref={textBoxRef}
          onKeyDown={handleKeyDown}
        />
      </div>
    


  );
};

export default TextBox;
