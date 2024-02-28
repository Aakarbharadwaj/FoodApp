import React, { useState } from 'react'
import './Card.css'



// const Items = {
//     url: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg',
//     title: "kadhai paneer",
//     rating: "4.8"
// }



const Card = (props) => {
    const [top, setTop] = useState(props.item)
    const clicked = () => (
        setTop(top.filter((item) => item.info.avgRatingString > 4)))
    return (
        <>

            <button className='top' style={{ marginLeft: "48%" }} onClick
                ={clicked}>Top Rated</button>
            <div className='card-box'>
                {
                    top.map((value, i) => (

                        <div className='card' key={i}>
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + value.info.cloudinaryImageId}></img>
                            <h3 className='brand'>{value.info.name}</h3>
                            <div className='title'>
                                <h3>{value.info.costForTwo}</h3>
                                <h3 className='rating'>{value.info.avgRatingString}</h3>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card