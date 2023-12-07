


import { createContext, useState } from "react";

export const PokemonTeamContext = createContext([]);

export function PokemonDataProvider(props){

    let [team, setTeam] = useState([]);

    return(
        <PokemonTeamContext.Provider value={{team, setTeam}}>
            {props.children}
        </PokemonTeamContext.Provider>
    )
}