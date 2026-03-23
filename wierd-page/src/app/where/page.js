'use client';

import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useRouter } from 'next/navigation';

export default function Where() {
  const router = useRouter();

  const clickMe = (id, name) => {
    Swal.fire({
      title: 'Divine Choice!',
      html: `<div style="font-family: 'Dancing Script', cursive; font-size: 1.5rem;">You have picked <strong>${name}</strong>! <br/> Perfect choice for a magical time.</div>`,
      icon: 'info',
      confirmButtonColor: '#ff1493',
      confirmButtonText: 'Let\'s RSVP!',
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: `rgba(255,105,180,0.4)`
    }).then((result) => {
      if (result.isConfirmed) {
        router.push(`/rsvp/${encodeURIComponent(name)}`);
      }
    });
  };

  return (
    <div className='card' style={{ maxWidth: '900px' }}>
      <h1>Choose Your Date Type</h1>
      <div className='optionButtons'>
        <div className='Options' onClick={() => clickMe('movie', 'Movie Date')}>
          <img 
            className='optionImages' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-TB_RLHLj_X-GrkKsg_HQcj581ddkVVpng&usqp=CAU' 
            alt='Movie Date' 
          />
          <div className='dateTitle'>Movie Date</div>
        </div>

        <div className='Options' onClick={() => clickMe('picnic', 'Picnic Date')}>
          <img 
            className='optionImages' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Y-8X6LbnzubxjjY47ryBYsHCUELvhdrBg&usqp=CAU' 
            alt='Picnic Date' 
          />
          <div className='dateTitle'>Picnic Date</div>
        </div>

        <div className='Options' onClick={() => clickMe('road-trip', 'Road Trip Date')}>
          <img 
            className='optionImages' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKINjUY0bi-8effQJG4wiUgEqS1zPT3hs7uOKjZ3hQFl05RbGEWanMMu9AMWNiVN5TPhY&usqp=CAU' 
            alt='Road Trip Date' 
          />
          <div className='dateTitle'>Road Trip Date</div>
        </div>

        <div className='Options' onClick={() => clickMe('snacks', 'Snack Date')}>
          <img 
            className='optionImages' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIefapmFLsV86_4Hx2F2yAnVIGLpHKOsnwA&usqp=CAU' 
            alt='Snack Date' 
          />
          <div className='dateTitle'>Snack Date</div>
        </div>
      </div>
    </div>
  );
}
