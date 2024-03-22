import { Link } from 'react-router-dom';

import './PokemonDetails.css'
import { useParams } from 'react-router-dom'
import usePokemon from '../../hooks/usePokemon';
function PokemonDetails() {
    const { id } = useParams();
    const [pokemon] = usePokemon(id);
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