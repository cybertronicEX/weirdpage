'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function RSVP() {
  const router = useRouter();
  const params = useParams();
  const name = decodeURIComponent(params.name || '');
  
  const [formData, setFormData] = useState({ date: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    Swal.fire({
      title: 'Success!',
      html: `
        <div style="font-family: 'Dancing Script', cursive; font-size: 1.5rem;">
          <p>Your RSVP for <strong>${name}</strong> has been received!</p>
          <p style="font-size: 1.2rem; margin-top: 1rem;">
            Date: ${formData.date}<br/>
            Email: ${formData.email}
          </p>
        </div>
      `,
      icon: 'success',
      confirmButtonColor: '#ff1493',
      confirmButtonText: 'Wonderful!',
      backdrop: `rgba(255,105,180,0.4)`
    }).then(() => {
      router.push('/');
    });
  };

  return (
    <div className='card' style={{ width: '450px' }}>
      <h1>RSVP</h1>
      <p style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>
        You selected: <span style={{ color: '#ff1493', fontWeight: 'bold' }}>${name}</span>
      </p>
      
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <div className="form-group">
          <label>When is the date?</label>
          <input
            className='inputs'
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Your Email</label>
          <input
            className='inputs'
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@love.com"
            required
          />
        </div>
        
        <button 
          className='button' 
          type="submit" 
          style={{ width: '100%', marginTop: '1rem' }}
        >
          Send RSVP 💕
        </button>
      </form>
      
      <button 
        className='button' 
        onClick={() => router.back()}
        style={{ 
          background: 'transparent', 
          color: 'white', 
          boxShadow: 'none', 
          fontSize: '1rem',
          marginTop: '1rem',
          height: '2rem'
        }}
      >
        Wait, take me back!
      </button>
    </div>
  );
}
