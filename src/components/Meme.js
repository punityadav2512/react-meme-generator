import './Meme.css';
import React from 'react'

function Meme() {
    return (
        <div className='meme'>
            <form action="" className='form'>

                <input className="form-input" type="text" />
                <input className="form-input" type="text" />
                <button className='form-button'>Get a new meme image</button>
            </form>
        </div>
    )
}

export default Meme