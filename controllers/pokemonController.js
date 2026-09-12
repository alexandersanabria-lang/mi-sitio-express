// "Base de datos" en memoria para los Pokémon
const pokemons = [];

const listPokemons = (req, res) => {
  res.render("pokemon", { title: "Pokédex", pokemons });
};

const createPokemon = (req, res) => {
  const { nombre, tipo, nivel, habilidad, imagen } = req.body;

  pokemons.push({ nombre, tipo, nivel, habilidad, imagen });

  res.redirect("/pokedex");
};

const pokemonController = {
  listPokemons,
  createPokemon
};

module.exports = pokemonController;