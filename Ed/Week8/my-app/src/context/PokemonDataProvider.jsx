


import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";

export const PokemonTeamContext = createContext([]);

export function PokemonDataProvider(props){

    let [team, setTeam] = useState([]);

    let [storedTeam, setStoredTeam] = useLocalStorage("pokemonTeamData", team);

    // on start load localstorage and save it to state
    useEffect(() => {
        setTeam(storedTeam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setStoredTeam(team);
    }, [team])

    return(
        <PokemonTeamContext.Provider value={{team, setTeam}}>
            {props.children}
        </PokemonTeamContext.Provider>
    )
}