import React, { useEffect, useState } from 'react'
import './Header.css'
const Header = () => {
    const [btnStatus, setBtnStatus] = useState("Login");
    const handleHeader = () => {
        btnStatus === "LogIn" ? setBtnStatus("LogOut") : setBtnStatus("LogIn")
    }
    useEffect(() => {
        console.log("useEffect");
    },[])
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
                    <button className='btn' onClick={handleHeader}>{btnStatus}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header