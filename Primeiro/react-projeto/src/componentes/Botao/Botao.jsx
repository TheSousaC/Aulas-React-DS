import style from './Botao.module.css'
import { TIPO_BOTAO } from './constants';
const Botao = (props) =>{
const {texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrosProps} = props;
    return(
        <>
            <button tipo={tipo} className={style.Botao}>
                {texto}
            </button>
        </>
    )
}
export { Botao }