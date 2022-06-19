import React from 'react'
import './card.css'

export default function Card({title, text, img, onClick}) {
    return (
        <>
            <div className='card-container' onClick={() => onClick()}>
                <h4 className='card-title'>{title}</h4>
                <div className='card-img'>
                    <img className='card-img-container' src={img} />
                </div>
                <p className='card-text'>{text}</p>
            </div>
        </>
    )
}
