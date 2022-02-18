import React from 'react';
import './Header.css';
import logoImg from '../images/punit1.png';

function Header() {
    return (
        <div className='header'>
            <img src={logoImg} alt="" />
            <h3>Meme Generator</h3>
            <h5>React Project 3</h5>

        </div>
    )
}

export default Header