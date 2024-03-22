import axios from "axios";
import { useEffect, useState } from "react";

function usePokemon(id) {
      const POKE_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon, setPokemon] = useState(null);


   async function downloadPokemon(id) {
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
        downloadPokemon(id)
    }, [])
    return [pokemon];
}
export default usePokemon;