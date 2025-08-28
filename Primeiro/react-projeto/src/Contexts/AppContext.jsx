import { createContext, useState } from "react";

export const AppContext = createContext({})

export const AppContextProvider = (props) =>{
    const { children } = props;

    const [Criador, setCriador] = useState('TheSousaC')

    const [Tarefas, setTarefas] = useState([
        {id: 1 , nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3 , nome: 'Item 3'},
        {id: 4, nome: 'Item 4'},
    ])


    return(
        <AppContext.Provider value={{Criador, Tarefas, setTarefas}}>
            {children}
        </AppContext.Provider>
    )
}

