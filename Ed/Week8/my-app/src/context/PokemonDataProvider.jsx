


import { createContext } from "react";

export const PokemonTeamContext = createContext([]);

export function PokemonDataProvider(props){
    return(
        <PokemonTeamContext.Provider value={[]}>
            {props.children}
        </PokemonTeamContext.Provider>
    )
}