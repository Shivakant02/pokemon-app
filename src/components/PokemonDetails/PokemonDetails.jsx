// import React from 'react'
import { Link } from 'react-router-dom';
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
        <>
            <h1>
                <Link to="/">
                Pokedex
                </Link>
            </h1>

            {pokemon && <div className='poke-details-wrapper'>
                <div className='poke-name'>
                    {pokemon.name}
                </div>
                <div className='poke-image'>
                    <img src={pokemon.image} alt="" />
                </div>
                <div className='poke-attr'>
                   <div> Height: {pokemon.height}</div>
                   <div> Weight: {pokemon.weight} </div>
                </div>
                <div className='poke-type'>
                    Type: {pokemon.types.map(t => <span className='type' key={t.type.name} >{t.type.name}</span>)}
                </div>
            </div>}
            </>
  )
}

export default PokemonDetails