import style from './ListaTarefa.module.css'
import { ListaTarefasItens } from "./ListaTarefasItens"

const ListaTarefa = () =>{
    const Tarefas = [
        {id: 1 , nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3 , nome: 'Item 3'},
        {id: 4, nome: 'Item 4'},
    ]
    return(
        <ul className={style.Lista}>
            {Tarefas.map(item => <ListaTarefasItens key={item.id} Nome={item.nome} />)}
        </ul>
    )
}
export { ListaTarefa }