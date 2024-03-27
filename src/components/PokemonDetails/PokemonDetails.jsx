import { Link } from 'react-router-dom';

import './PokemonDetails.css'
// import { useParams } from 'react-router-dom'
import usePokemon from '../../hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';
function PokemonDetails({pokemonName}) {
    const [pokemon,pokemonListState] = usePokemon(pokemonName);
    return (
        <>
            <h1>
                <Link to="/">
                Pokedex dashboard
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
            <div className='similar-poke'>
                <h2>similar pokemons</h2>
                <div className='similar-boxes'>
                    {pokemonListState.pokeList.length > 0 &&
                        pokemonListState.pokeList.map( pokemon=> < Pokemon
                name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id} />)
                    }
                </div>
            </div>
            
            </>
  )
}

export default PokemonDetails