import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useParams } from 'react-router-dom';
import '../App.css'

function RSVP() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ date: '', email: '' });


    const { name } = useParams(); // Get the value of the "name" parameter

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add logic to send RSVP using formData.date and formData.email
        // For example, sending a POST request to your server
        
        // Show a confirmation message
        Swal.fire({
            title: 'RSVP Sent!',
            text: `Date: ${formData.date}\nEmail: ${formData.email}`,
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            // Redirect to the previous page after RSVP is sent
            navigate('./');
        });
    };

    return (
        <div className="questions">
            <h2>RSVP</h2>
            <p>You selected: {name}</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        className='inputs'
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        placeholder="Enter date..."
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        className='inputs'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email..."
                        required
                    />
                </div>
                <button className='button' type="submit">Submit RSVP</button>
            </form>
        </div>
    );
}

export default RSVP;
