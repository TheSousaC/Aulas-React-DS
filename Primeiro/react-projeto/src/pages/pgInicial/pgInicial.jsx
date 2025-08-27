import { useState } from 'react'
import { FormCriarTarefa, ListaTarefa } from '../../componentes'
import style from './pgInicial.module.css'

const PgInicial = () => {
   const [Tarefas, setTarefas] = useState([
        {id: 1 , nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3 , nome: 'Item 3'},
        {id: 4, nome: 'Item 4'},
    ])

    return(
        <div className={style.pgInicial}>
            <FormCriarTarefa />
            <ListaTarefa Tarefas={Tarefas} />
        </div>
    )
}
export { PgInicial }