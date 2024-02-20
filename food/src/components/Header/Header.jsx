import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='nav-logo'>
                <img src={'https://tse2.mm.bing.net/th?id=OIP.mNFIak6dzWUgkgW_89ILNwHaHj&pid=Api&P=0&h=180'}></img>
            </div>
            <div className='nav-list'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header