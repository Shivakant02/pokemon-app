// import React from 'react'
import { useEffect, useState } from 'react'
import './PokemonList.css'
import axios from 'axios';
import Pokemon from '../Pokemon/Pokemon';
// import PreviousMap from 'postcss/lib/previous-map';

function PokemonList() {
    const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon'
    
    // const [pokeList, setPokeList] = useState([]);
    // const [pokedexurl, setPokedexurl] = useState(DEFAULT_URL);
    
    // const [nextURL, setNextUrl] = useState(DEFAULT_URL)
    // const [prevURL, setPrevUrl] = useState(DEFAULT_URL)
    
    const [pokemonListState, setPokemonListState] = useState({
        pokeList: [],
        pokedexurl: DEFAULT_URL,
        nextURL: DEFAULT_URL,
        prevURL:DEFAULT_URL
        
    });
// console.log(pokemonListState.prevURL);
// console.log(pokemonListState.nextURL);
    async function downloadPokemons() {
        const response = await axios.get(pokemonListState.pokedexurl?pokemonListState.pokedexurl:DEFAULT_URL);
        // console.log(response);
        const pokemonResult = response.data.results;
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous)

        // setPokemonListState((state)=>({...state,nextURL:response.data.next,prevURL:response.data.Previous}))


        //Array of first 20 pokemons

        const pokemonPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
        
        // console.log(pokemonPromise);

        const pokeListData = await axios.all(pokemonPromise)
        // console.log(pokeListData);
        const pokeFinalList = pokeListData.map((pokemonData) => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });

        setPokemonListState({...pokemonListState,pokeList:pokeFinalList,nextURL:response.data.next,prevURL:response.data.previous});
        // console.log(pokeFinalList);
    //   console.log(pokemonListState.prevURL);
    }
    useEffect(() => {
     downloadPokemons()
    },[pokemonListState.pokedexurl])
    
    return (
        <div className='pokeListWrapper'>
            <div id='poke-header'>Pokemon List</div>

            <div className='page-control'>
                <button onClick={()=>setPokemonListState({...pokemonListState,pokedexurl:pokemonListState.prevURL})}>Prev</button>
                <button onClick={()=>setPokemonListState({...pokemonListState,pokedexurl:pokemonListState.nextURL})}>Next</button>
            </div>
            <div className='poke-list'>
            {pokemonListState.pokeList.map( pokemon=> < Pokemon
                name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)}
                </div>
        </div>
    )
}

export default PokemonList