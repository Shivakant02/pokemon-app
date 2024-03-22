import axios from "axios";
import { useEffect, useState } from "react";

function PokemonList(DEFAULT_URL) {
    
    
    
    const [pokemonListState, setPokemonListState] = useState({
        pokeList: [],
        pokedexurl: DEFAULT_URL,
        nextURL: DEFAULT_URL,
        prevURL: DEFAULT_URL
        
    });
   
    async function downloadPokemons() {
        const response = await axios.get(pokemonListState.pokedexurl ? pokemonListState.pokedexurl : DEFAULT_URL);
        
        const pokemonResult = response.data.results;
       

        const pokemonPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
        
      

        const pokeListData = await axios.all(pokemonPromise)
       
        const pokeFinalList = pokeListData.map((pokemonData) => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });

        setPokemonListState({ ...pokemonListState, pokeList: pokeFinalList, nextURL: response.data.next, prevURL: response.data.previous });
       
    }
    useEffect(() => {
        downloadPokemons()
    }, [pokemonListState.pokedexurl])

    return [pokemonListState, setPokemonListState];
}

export default PokemonList;