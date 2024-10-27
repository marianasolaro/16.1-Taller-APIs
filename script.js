async function fetchPokemon() {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const infoDiv = document.getElementById('pokemon-info');
    infoDiv.innerHTML = "";

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) throw new Error("Pokémon not found");

        const data = await response.json();
        infoDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
        `;
    } catch (error) {
        infoDiv.innerText = "Pokémon not found!";
    }
}