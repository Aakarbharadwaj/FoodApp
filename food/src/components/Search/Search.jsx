import React, { useState } from 'react'
import './Search.css'
const Search = () => {
    const [item, setItem] = useState("")

    return (
        <>
            <div className='search'>
                <input type='text' placeholder='Enter food item' value={item} onChange={(e) => { setItem(e.target.value) }} />
                <button>Search</button>
            </div>
            
        </>
    )
}

export default Search