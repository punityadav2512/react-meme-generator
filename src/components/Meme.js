import './Meme.css';
import React, { useState, useEffect } from 'react';
// import memesData from '../memesData';


function Meme() {
    // const [memeImage, setmemeImage] = useState("");

    const [meme, setmeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemes, setallMemes] = useState([]);

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
            .then(res => res.json())
            .then(data => setallMemes(data.data.memes));

    }, []);


    function handleChange(event) {
        const { name, value } = event.target;
        setmeme(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    // function getInput(event) {
    //     setmeme(prev => {
    //         return {
    //             ...prev,
    //             [event.target.name]: event.target.value,
    //         }
    //     })
    // }

    function getMemeImage(event) {
        event.preventDefault();
        // const memesArray = allMemes;
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        // memeImage = memesArray[randomNumber].url;
        setmeme((prevMeme) => {
            return {
                ...prevMeme,
                randomImage: allMemes[randomNumber].url
            }
        })

    }
    return (
        <main>


            <div className="form">


                <input className="form-input" type="text" onChange={handleChange} name='topText' value={meme.topText} />
                <input className="form-input" type="text" onChange={handleChange} name='bottomText' value={meme.bottomText} />
                <button className='form-button' onClick={getMemeImage}>Get a new meme image</button>

            </div>
            <div className='meme'>
                <img src={meme.randomImage} alt="meme" className='meme__image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme