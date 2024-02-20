import React from 'react'
import './card.css'
const Card = () => {
    return (
        <div className='card-box'>
            <div className='card'>
                <img src={'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg'}></img>
                <div className='title'>
                    <h3>Top India dish</h3>
                    <h3 className='rating'>4.9</h3>
                </div>
            </div>
        </div>
    )
}

export default Card