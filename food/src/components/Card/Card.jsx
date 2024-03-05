import React, { useEffect, useState } from 'react'
import './Card.css'
// import Search from '../Search/Search'
import Search from './../Search/Search';


// const Items = {
//     url: 'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg',
//     title: "kadhai paneer",
//     rating: "4.8"
// }



const Card = (props) => {
    const [top, setTop] = useState([])
    const [item, setItem] = useState("");
    // const [value, setValue] = useState("");

    const clicked = () => (
        setTop(top.filter((item) => item.info.avgRatingString > 4.3)))


    const handleSearch = () => {

        // console.log(item);
        // setValue(item);
        // console.log(value);
        setTop(top.filter((food) => food.info.name.toLocaleLowerCase().includes(item.toLocaleLowerCase())));
        setItem("");
        console.log(top);
    }


    useEffect(
        () => {
            const handleTop = async () => {
                const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
                const response = await data.json();
                setTop(response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            }
            handleTop();
        }, [])
    return (
        <>
            <div className='search'>
                <input type='text' placeholder='Enter food item' value={item} onChange={(e) => { setItem(e.target.value) }} />
                <button onClick={handleSearch}>Search</button>
            </div>


            <button className='top' style={{ marginLeft: "48%" }} onClick
                ={clicked}>Top Rated Restaurants</button>


            <div className='card-box'>
                {
                    top ?
                        top.map((value, i) => (

                            <div className='card' key={i}>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + value.info.cloudinaryImageId}></img>
                                <h3 className='brand'>{value.info.name}</h3>
                                <p className='time' style={{ color: 'grey' }}>Delivery Time : {value.info.sla.deliveryTime} min.</p>
                                <div className='title'>
                                    <h3>{value.info.costForTwo}</h3>
                                    <h3 className='rating'>{value.info.avgRatingString}</h3>
                                </div>

                            </div>
                        )) : <p>No such Restaurant found</p>
                }
            </div>
        </>
    )
}

export default Card