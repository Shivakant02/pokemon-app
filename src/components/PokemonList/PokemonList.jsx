// import React from 'react'
import { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
    const [pokeList, setPokeList] = useState([]);
    const POKEDEX_URL = 'https://pokeapi.co/api/v2/pokemon';

    async function downloadPokemons() {
        const response = await axios.get(POKEDEX_URL);
        // console.log(response);
        const pokemonResult = response.data.results;

        //Array of first 20 pokemons

        const pokemonPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
        
        // console.log(pokemonPromise);

        const pokeListData = await axios.all(pokemonPromise)
        console.log(pokeListData);
        const pokeFinalList = pokeListData.map((pokemonData) => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });
        setPokeList(pokeFinalList);
        console.log(pokeFinalList);

    }
    useEffect(() => {
     downloadPokemons()
    },[])
    
    return (
        <div className='pokeListWrapper'>
            <div id='poke-header'>Pokemon List</div>

            <div className='page-control'>
                <button>Prev</button>
                <button>Next</button>
            </div>
            <div className='poke-list'>
            {pokeList.map( pokemon=> < Pokemon
                name={pokemon.name} key={pokemon.id} url={pokemon.image} />)}
                </div>
        </div>
    )
}

export default PokemonList