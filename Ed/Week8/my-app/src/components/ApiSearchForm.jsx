import { useContext, useState } from "react";
import { ApiContext } from "../context/ApiProvider";
import { PokemonTeamContext } from "../context/PokemonDataProvider";

export function ApiSearchForm(){
	let apiUrlBase = useContext(ApiContext);
	let [searchData, setSearchData] = useState("pikachu");
    let pokemonDataArray = useContext(PokemonTeamContext);

	const searchForPokemon = async () => {
		// console.log(`API URL is: ${apiUrlBase}`);
		let response = await fetch(apiUrlBase + "pokemon/" + searchData);
        let data = await response.json();
        pokemonDataArray.push(data);
	}

	return(
		<div>
			<h5>Enter a Pokemon name:</h5>
			<input 
				type="text" 
				name="pokemonName" 
				id="pokemonName" 
				value={searchData} 
				onChange={event => setSearchData(event.target.value)} 
			/>
			<button onClick={searchForPokemon} type="submit">Search</button>
		</div>
	)

}