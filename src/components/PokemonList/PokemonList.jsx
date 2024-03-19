// import React from 'react'
import { useEffect } from 'react'
import './PokemonList.css'
import axios, { AxiosError } from 'axios';

function PokemonList() {
    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon';

    async function downloadPokemons() {
        const response = await axios.get(POKEDEX_URL);
        console.log(response);
    }
    useEffect(() => {
     downloadPokemons()
    },[])
    
    return (
        <>
            list
        </>
    )
}

export default PokemonList