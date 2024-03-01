import React, { useEffect, useState } from 'react'
import './Card.css'



// const Items = {
//     url: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg',
//     title: "kadhai paneer",
//     rating: "4.8"
// }



const Card = (props) => {
    const [top, setTop] = useState([])
    const clicked = () => (
        setTop(top.filter((item) => item.info.avgRatingString > 4.5)))

    useEffect(
        () => {
            const handleTop = async () => {
                const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                const json = await data.json();
                setTop(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
            }
            handleTop();
        }, [])
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