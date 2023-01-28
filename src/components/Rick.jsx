import React, { useState } from 'react'
import axios from 'axios';
 

export function Rick() {

    const [characters, setCharacters] = useState([]);
    const [name, setName] = useState('');
    

    const handleCharacters = async(e) => {
        e.preventDefault();
        await axios.get("https://rickandmortyapi.com/api/character")
        .then(response =>  setCharacters(response.data.results));
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        let newCh = {
            name, 
            id: 12121
        }
        setCharacters((prev) => [...prev, newCh ] )
        console.log('characters', characters)
    }

    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value)
    }

  return (
    <div>
        <button onClick={handleCharacters}>Click</button>
        {
            characters?.map(ele => (
                <div key={ele.id}>
                    <p>{ele.name}</p>
                    <img src={ele.image} alt="" />
                </div>
            ))
        }
        <form onSubmit={handleSubmit}>
            <input type="text" name='nombre' onChange={handleChange}/>
            <button type='submit'>Crear personaje</button>
        </form>
    </div>
  )
}

