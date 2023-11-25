import React from 'react'
import '../App.css'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

function Where() {
    const navigate = useNavigate();

    const clickMe = (id, name) => {
        Swal.fire({
            title: 'You have Picked',
            html: `<strong>${name}</strong>`,
            icon: 'info',
            confirmButtonText: 'Okay!',
            allowOutsideClick: false, // Prevent closing by clicking outside
            allowEscapeKey: false, // Prevent closing by pressing escape key
            allowEnterKey: true, // Enable confirmation by pressing enter key
        }).then((result) => {
            if (result.isConfirmed) {
                navigate(`/rsvp/${name}`); // Navigate to '/another-page' when Okay is clicked
            }
        });
    };
    return (
        <div className='where'>
            <div className='questions'>Choose Your Date Type.</div>
            <div className='optionButtons'>
                <button className='Options' id='movie' onClick={() => clickMe('movie', 'Movie Date')} >
                    <img className='optionImages' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-TB_RLHLj_X-GrkKsg_HQcj581ddkVVpng&usqp=CAU' alt='imageTitle' />
                    <div className='dateTitle' >Movie Date</div>
                </button>

                <button className='Options' id='picnic' onClick={() => clickMe('movie', 'Picnic Date')} >
                    <img className='optionImages' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Y-8X6LbnzubxjjY47ryBYsHCUELvhdrBg&usqp=CAU' alt='imageTitle' />
                    <div className='dateTitle' >Picnic Date</div>
                </button>

                <button className='Options' id='road-trip' onClick={() => clickMe('movie', 'Road Trip Date')} >
                    <img className='optionImages' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKINjUY0bi-8effQJG4wiUgEqS1zPT3hs7uOKjZ3hQFl05RbGEWanMMu9AMWNiVN5TPhY&usqp=CAU' alt='imageTitle' />
                    <div className='dateTitle' >Road Trip Date</div>
                </button>

                <button className='Options' id='snacks' onClick={() => clickMe('snack', 'Snack Date')} >
                    <img className='optionImages' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIefapmFLsV86_4Hx2F2yAnVIGLpHKOsnwA&usqp=CAU' alt='imageTitle' />
                    <div className='dateTitle' >Snack Date</div>
                </button>
            </div>

        </div>
    )
}

export default Where