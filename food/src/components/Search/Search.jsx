import React, { useState } from 'react'
import './Search.css'
const Search = () => {
    const [item, setItem] = useState("");
    const [value, setValue] = useState("");
    const handleSearch = () => {
        setValue(item);
    }
    return (
        <>
            <div className='search'>
                <input type='text' onClick={handleSearch} placeholder='Enter food item' value={item} onChange={(e) => { setItem(e.target.value) }} />
                <button>Search</button>
            </div>

        </>
    )
}

export default Search