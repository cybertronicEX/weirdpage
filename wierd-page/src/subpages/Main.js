import React, { useState, useEffect } from 'react';
import '../App.css';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

export default function Main() {
  const [nopeClicked, setNopeClicked] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const navigate = useNavigate();
   // Get the navigate function
  const clickMe = () => {
    Swal.fire({
      title: 'Date Invitation',
      html: 'I would love to go out on a date with you! 💕🌹',
      icon: 'info',
      confirmButtonText: 'Okay!',
      allowOutsideClick: false, // Prevent closing by clicking outside
      allowEscapeKey: false, // Prevent closing by pressing escape key
      allowEnterKey: true, // Enable confirmation by pressing enter key
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/where'); // Navigate to '/another-page' when Okay is clicked
      }
    });
  };

  const handleNopeClick = () => {
    setNopeClicked(true);
    alert('Nice Try');
    // Optionally, add window.close() here, but note the browser restrictions
  };

  useEffect(() => {
    const button1Box = document.getElementById('button').getBoundingClientRect();
    const initialX = button1Box.right + 10; // Set the initial X position next to the first button
    const initialY = button1Box.y;

    setButtonPosition({ x: initialX, y: initialY });

    const handleMouseMove = (e) => {
      const x = e.pageX;
      const y = e.pageY;
      const buttonBox = document.getElementById('evil-button').getBoundingClientRect();
      const OFFSET = 15;
      const windowBox = document.body.getBoundingClientRect();

      const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width);
      const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height);
      const horizontalOffset = buttonBox.width / 2 + OFFSET;
      const verticalOffset = buttonBox.height / 2 + OFFSET;

      let newX = buttonBox.x + (horizontalOffset / horizontalDistanceFrom) * 5;
      let newY = buttonBox.y + (verticalOffset / verticalDistanceFrom) * 5;

      if (newX < windowBox.left + OFFSET) {
        newX = windowBox.left + OFFSET;
      } else if (newX > windowBox.right - buttonBox.width - OFFSET) {
        newX = windowBox.right - buttonBox.width - OFFSET;
      }
      if (newY < windowBox.top + OFFSET) {
        newY = windowBox.top + OFFSET;
      } else if (newY > windowBox.bottom - buttonBox.height - OFFSET) {
        newY = windowBox.bottom - buttonBox.height - OFFSET;
      }

      setButtonPosition({ x: newX, y: newY });
    };

    const distanceFromCenter = (boxPosition, mousePosition, boxSize) => {
      return boxPosition - mousePosition + boxSize / 2;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const buttonStyle = {
    position: 'absolute',
    left: `${buttonPosition.x}px`,
    top: `${buttonPosition.y}px`,
  };

  return (
    <div className="Date">
      <h1>Would you go out on a date with me?</h1>
      <div className="image">
        <img className="slideshow" src="https://i.imgflip.com/6tci39.jpg" alt="dad" />
      </div>
      <div className="butt">
        <button id="button" className='button' onClick={clickMe}>I'd love to</button>
        <button
          id="evil-button"
          className="evil-button"
          onClick={handleNopeClick}
          disabled={nopeClicked}
          style={buttonStyle}
        >
          Nope
        </button>
      </div>
    </div>
  );
}

// export default Main;
