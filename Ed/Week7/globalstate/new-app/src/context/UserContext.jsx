import { createContext, useState} from "react"


const defaultUserData = {
    jwt: "something"
}

export const UserContext = createContext(defaultUserData);

export default function UserGlobalData(props) {
    const [userData, setUserData] = useState(defaultUserData)
    return(
        <UserContext.Provider value={{userData: userData, setUserData: setUserData}}>
            {props.children}
        </UserContext.Provider>
    )
}