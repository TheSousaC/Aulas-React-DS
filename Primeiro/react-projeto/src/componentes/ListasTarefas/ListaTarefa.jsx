import style from './ListaTarefa.module.css'
import { ListaTarefasItens } from "./ListaTarefasItens"

const ListaTarefa = (props) =>{
    const { Tarefas } = props;
    return(
        <ul className={style.Lista}>
            {Tarefas.map(item => <ListaTarefasItens key={item.id} Nome={item.nome} />)}
        </ul>
    )
}
export { ListaTarefa }