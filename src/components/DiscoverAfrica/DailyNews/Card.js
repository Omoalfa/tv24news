import './card.css'
import React from 'react'

const Card = ({image, caption}) => {
    return (
        <div className="daily-card">
            <img src={image} alt={caption} />
            <p className="daily-caption">{caption}</p>
        </div>
    )
}

export default Card