import React, { useState, useEffect } from 'react';

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemones(data.results));
  }, []);

  function handleSelectChange(event) {
    setSelectedPokemon(event.target.value);
  }

  function fetchPokemonDetails() {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => response.json())
        .then(details => setPokemonDetails(details));
    }
  }

  return (
    <div>
      <h1>Selecciona un Pokémon</h1>
      <select value={selectedPokemon} onChange={handleSelectChange}>
        <option value="">Selecciona un Pokémon</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={fetchPokemonDetails}>Ver Detalle</button>

      {pokemonDetails && (
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
          <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} style={{ marginRight: '20px' }} />
          <div>
            <h2 style={{ textTransform: 'capitalize' }}>{pokemonDetails.name}</h2>
            <ul>
              <li>hp: {pokemonDetails.stats.find(stat => stat.stat.name === 'hp').base_stat}</li>
              <li>attack: {pokemonDetails.stats.find(stat => stat.stat.name === 'attack').base_stat}</li>
              <li>defense: {pokemonDetails.stats.find(stat => stat.stat.name === 'defense').base_stat}</li>
              <li>special-attack: {pokemonDetails.stats.find(stat => stat.stat.name === 'special-attack').base_stat}</li>
              <li>special-defense: {pokemonDetails.stats.find(stat => stat.stat.name === 'special-defense').base_stat}</li>
              <li>speed: {pokemonDetails.stats.find(stat => stat.stat.name === 'speed').base_stat}</li>
            </ul>
            <div style={{ textTransform: 'capitalize' }}>
              {pokemonDetails.types.map(typeInfo => typeInfo.type.name).join(', ')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemones;

