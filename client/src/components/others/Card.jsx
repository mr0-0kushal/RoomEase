import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src='' alt="Room Image" />
                    <h3>Deluxe Room</h3>
                    <p>$120 / Night</p>
                </div>
                <div className="card-back">
                    <h3>Details</h3>
                    <p>Check-in: 12:00 PM</p>
                    <p>Check-out: 10:00 AM</p>
                    <p>Wi-Fi, Pool Access</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>

    )
}

export default Card
