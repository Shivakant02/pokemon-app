// import React from 'react'
import { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';

function PokemonList() {
    const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon'
    
    const [pokeList, setPokeList] = useState([]);
    const [pokedexurl, setPokedexurl] = useState(DEFAULT_URL);
    
    const [nextURL, setNextUrl] = useState(DEFAULT_URL)
    const [prevURL, setPrevUrl] = useState(DEFAULT_URL)

    async function downloadPokemons() {
        const response = await axios.get(pokedexurl?pokedexurl:DEFAULT_URL);
        // console.log(response);
        const pokemonResult = response.data.results;
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous)


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
    },[pokedexurl])
    
    return (
        <div className='pokeListWrapper'>
            <div id='poke-header'>Pokemon List</div>

            <div className='page-control'>
                <button onClick={()=>setPokedexurl(prevURL)}>Prev</button>
                <button onClick={()=>setPokedexurl(nextURL)}>Next</button>
            </div>
            <div className='poke-list'>
            {pokeList.map( pokemon=> < Pokemon
                name={pokemon.name} key={pokemon.id} url={pokemon.image} />)}
                </div>
        </div>
    )
}

export default PokemonList