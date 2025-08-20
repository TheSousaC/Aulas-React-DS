import { CampoTexto } from '../CampoTexto'
import { Botao, TIPO_BOTAO } from '../Botao'
import style from './FormCriarTarefa.module.css'

const FormCriarTarefa = () => {
    return(
            <form action="" method="post" className={style.FormCriarTarefa}>
                <CampoTexto />
                <Botao texto='ADICIONAR' tipo={TIPO_BOTAO.SECUNDARIO}/>
            </form>
    )
}
export { FormCriarTarefa }