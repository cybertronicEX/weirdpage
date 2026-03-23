'use client';

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [nopeClicked, setNopeClicked] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    
    // Initial position for the "Nope" button
    const updateInitialPosition = () => {
      const yesBtn = document.getElementById('button');
      if (yesBtn) {
        const rect = yesBtn.getBoundingClientRect();
        setButtonPosition({ x: rect.right + 20, y: rect.top });
      }
    };

    // Delay slightly to ensure layout is settled
    const timer = setTimeout(updateInitialPosition, 100);
    window.addEventListener('resize', updateInitialPosition);

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const button = document.getElementById('evil-button');
      if (!button) return;
      
      const buttonBox = button.getBoundingClientRect();
      const horizontalDistanceFrom = (buttonBox.x + buttonBox.width / 2) - x;
      const verticalDistanceFrom = (buttonBox.y + buttonBox.height / 2) - y;
      
      const distance = Math.sqrt(horizontalDistanceFrom ** 2 + verticalDistanceFrom ** 2);
      const THRESHOLD = 100;
      
      if (distance < THRESHOLD) {
        // Move AWAY from the mouse
        const moveX = (horizontalDistanceFrom / distance) * 25;
        const moveY = (verticalDistanceFrom / distance) * 25;

        setButtonPosition(prev => {
          let newX = prev.x + moveX;
          let newY = prev.y + moveY;

          // Keep within bounds
          const padding = 20;
          newX = Math.max(padding, Math.min(newX, window.innerWidth - buttonBox.width - padding));
          newY = Math.max(padding, Math.min(newY, window.innerHeight - buttonBox.height - padding));

          return { x: newX, y: newY };
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateInitialPosition);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const clickMe = () => {
      Swal.fire({
        title: 'Date Invitation',
        html: '<div style="font-family: \'Dancing Script\', cursive; font-size: 1.5rem;">I would love to go out on a date with you! 💕🌹</div>',
        icon: 'info',
        confirmButtonColor: '#ff1493',
        confirmButtonText: 'I\'d Love To!',
        allowOutsideClick: false,
        allowEscapeKey: false,
        backdrop: `rgba(255,105,180,0.4)`
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/where');
        }
      });
  };

  const handleNopeClick = () => {
    setNopeClicked(true);
    Swal.fire({
      title: 'Nice Try!',
      text: 'You can\'t say no to love! 😉',
      icon: 'warning',
      confirmButtonColor: '#ff1493'
    });
  };

  if (!isMounted) return null;

  return (
    <div className="card">
      <h1>Would you go out on a date with me?</h1>
      <div className="image">
        <img 
          className="slideshow" 
          src="https://i.imgflip.com/6tci39.jpg" 
          alt="Sweet Invitation" 
        />
      </div>
      <div className="butt" style={{ display: 'flex', gap: '1rem', position: 'relative', minHeight: '4rem', width: '100%', justifyContent: 'center' }}>
        <button id="button" className='button' onClick={clickMe}>Yes!</button>
        <button
          id="evil-button"
          className="evil-button"
          onClick={handleNopeClick}
          disabled={nopeClicked}
          style={{
            position: 'fixed',
            left: `${buttonPosition.x}px`,
            top: `${buttonPosition.y}px`,
            transition: 'left 0.1s ease, top 0.1s ease'
          }}
        >
          Nope
        </button>
      </div>
    </div>
  );
}
