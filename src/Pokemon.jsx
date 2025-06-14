import { useState, useEffect } from "react";

export function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const typeColors = {
    normal: "border-gray-400",
    fire: "border-red-500",
    water: "border-blue-500",
    grass: "border-green-500",
    electric: "border-yellow-400",
    ice: "border-blue-200",
    fighting: "border-red-700",
    poison: "border-purple-500",
    ground: "border-yellow-700",
    flying: "border-indigo-300",
    psychic: "border-pink-400",
    bug: "border-lime-500",
    rock: "border-yellow-800",
    ghost: "border-indigo-700",
    dragon: "border-purple-700",
    dark: "border-gray-800",
    steel: "border-gray-500",
    fairy: "border-pink-300",
  };
  useEffect(() => {
    const randomPokemon = Math.floor(Math.random() * 1025 + 1);
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemon)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  if (!pokemon) return <p>Fetching Pokémon...</p>;

  return (
    <section className="pokemonContainer w-3xl h-full flex flex-col bg-[#1B263B] border-[#3A5F7A] border-3 rounded-lg p-4 mt-4 mb-4 gap-8">
      <div className="flex gap-2">
        <div className="flex flex-col grow">
          <h2 className="bg-[#415A77] border-[#4B7A94] flex justify-center border-2 rounded-lg p-2 text-lg capitalize text-white">
            {pokemon.name}
          </h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>

        <div className="grow flex flex-col items-center gap-2 text-white">
          <div className="bg-[#415A77] border-[#4B7A94] flex items-center flex-col gap-2 border-2 rounded-lg p-2 text-lg w-full">
            Type:
            <div className="flex gap-2">
              {pokemon.types.map((typeObj) => {
                const typeName = typeObj.type.name;
                const typeClass = typeColors[typeName] || "border-white";
                return (
                  <p
                    className={`bg-[#415A77] ${typeClass} border-2 rounded-lg p-2 text-lg text-white capitalize`}
                  >
                    {typeName}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="bg-[#415A77] border-[#4B7A94] flex items-center flex-col gap-2 border-2 rounded-lg p-2 text-lg w-full h-full">
            Moves:
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto">
              {pokemon.moves.slice(0, 5).map((moveObj) => (
                <p className="bg-[#778DA9] border-[#4B7A94] border rounded px-2 py-1 text-sm">
                  {moveObj.move.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
