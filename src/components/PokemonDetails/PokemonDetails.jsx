// import React from 'react'
import { useEffect } from 'react'
import './PokemonDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
function PokemonDetails() {
    const { id } = useParams();
    const POKE_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);


   async function downloadPokemon() {
       const response = await axios.get(POKE_DETAIL_URL + id)
       const pokemon = response.data;
       //    console.log(pokemon);
       setPokemon(
           {
               name: pokemon.name,
               height: pokemon.height,
               weight: pokemon.weight,
               types: pokemon.types,
               image:pokemon.sprites.other.dream_world.front_default
           }
       )

    }


    useEffect(() => {
        downloadPokemon()
    },[])
    return (
        pokemon && <div className='poke-details-wrapper'>
            <div>
                {pokemon.name}
            </div>
            <div>
                <img src={pokemon.image} alt="" />
            </div>
            <div>
                Height: {pokemon.height}
                Weight: {pokemon.weight}
            </div>
            <div>
                Type: {pokemon.types.map(t => <span key={t.type.name} >{ t.type.name}</span>)}
            </div>
      </div>
  )
}

export default PokemonDetails