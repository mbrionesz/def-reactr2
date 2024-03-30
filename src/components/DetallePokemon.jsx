import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetallePokemon() {
  const { id } = useParams(); // `id` aquí corresponde al nombre del pokémon en la URL
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');

    fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo encontrar el pokémon solicitado');
        }
        return response.json();
      })
      .then(data => setPokemonDetails(data))
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {pokemonDetails && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <img 
            src={pokemonDetails.sprites.front_default} 
            alt={pokemonDetails.name} 
            style={{ marginRight: '20px' }} 
          />
          <div>
            <h2 style={{ textTransform: 'capitalize' }}>{pokemonDetails.name}</h2>
            <ul>
              {pokemonDetails.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <p style={{ textTransform: 'capitalize' }}>
              Tipo: {pokemonDetails.types.map((type) => type.type.name).join(', ')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetallePokemon;