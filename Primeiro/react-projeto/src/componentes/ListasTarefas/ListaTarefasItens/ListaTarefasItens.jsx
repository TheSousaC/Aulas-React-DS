import { Botao, TIPO_BOTAO } from '../../Botao';
import style from './ListaTarefasItens.module.css'

const ListaTarefasItens = (props) => {
    const {Nome} = props;
    return(
        <li className={style.itens_lista}>
            {Nome}
            <Botao texto="-" tipo = {TIPO_BOTAO.SECUNDARIO} />
        </li>
    )
}
export { ListaTarefasItens }