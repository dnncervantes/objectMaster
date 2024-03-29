const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
// Grabs pokemon with the letter "B"
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn);

// Grabs pokemon "ids"
// const pkmnIds = pokémon.map( p => p.id );
// console.log(pkmnIds);

//1. An array of pokémon objects where the id is evenly divisible by 3
const even = pokémon.filter(p => p.id %3 === 0);
// console.log(even);
//2. An array of pokemon object that are "fire" type
const firePokemon = pokémon.filter( p => p.types.includes("fire"));
// console.log(firePokemon);

//3. An array of Pokemon objects that have more than one type
const extraTypes = pokémon.filter( (poke) => poke.types.length >= 2);
// console.log(extraTypes);

//4. An array of pokemon with just the names of the pokemon
const pokemonNames = pokémon.map( p => p.name);
// console.log(pokemonNames);

//5. an array with just the names of pokemon with an id greater than 99
const overNintyNine = pokémon.filter( p => p.id > 99).map( p => p.name);
// console.log(overNintyNine);

//6. an array with just the names of the pokemon whose only type is poison
const poisonType = pokémon.filter( p => p.types == "poison").map( p => p.name);
// console.log(poisonType);

//7. an array containing just the first type of all the pokemon whose second type is "flying"
const firstTypeWithFlying = pokémon.filter( p => p.types[1] === "flying").map( p => p.types[0]);
// console.log(firstTypeWithFlying);

//8. a count of the number of pokemon that are "normal" type
const normalCount = pokémon.filter( p => p.types.includes("normal")).length;
// console.log(normalCount);
