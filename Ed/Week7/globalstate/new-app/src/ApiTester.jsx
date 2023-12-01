import { useContext } from "react"
import { ConnectionContext } from "./context/ConnectionContext"

export default function ApiTester() {
    // let connectionData = useContext(ConnectionContext);
    let {url} = useContext(ConnectionContext);
    return(
        <div>
            {/* <h1>API URL: {connectionData.url}</h1> */}
            <h1>API URL: {url}</h1>
        </div>
    )

}