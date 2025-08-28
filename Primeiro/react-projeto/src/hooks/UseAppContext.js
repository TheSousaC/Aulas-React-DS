import { useContext } from "react"
import { AppContext } from "../Contexts"

const UseAppContext = () =>{
    const Contexto = useContext(AppContext)

    return Contexto
}

export { UseAppContext }