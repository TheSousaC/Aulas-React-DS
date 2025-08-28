import style from './ListaTarefa.module.css'
import { ListaTarefasItens } from "./ListaTarefasItens"
import { UseAppContext } from '../../hooks'

const ListaTarefa = () =>{
    const {Tarefas} = UseAppContext()
    return(
        <ul className={style.Lista}>
            {Tarefas.map(item => <ListaTarefasItens key={item.id} Nome={item.nome} />)}
        </ul>
    )
}
export { ListaTarefa }