import React from 'react'
import './card.css'


const Items = {
    url: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg',
    title: "kadhai paneer",
    rating: "4.8"
}

const Card = () => {
    return (
        <div className='card-box'>
            <div className='card'>
                <img src={Items.url}></img>
                <h3 className='brand'>{Items.title}</h3>
                <div className='title'>
                    <h3>Top India dish</h3>
                    <h3 className='rating'>{Items.rating}</h3>
                </div>

            </div>
        </div>
    )
}

export default Card