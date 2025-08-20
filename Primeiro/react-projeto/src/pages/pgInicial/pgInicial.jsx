import { FormCriarTarefa, ListaTarefa } from '../../componentes'
import style from './pgInicial.module.css'

const PgInicial = () => {
    return(
        <div className={style.pgInicial}>
            <FormCriarTarefa />
            <ListaTarefa />
        </div>
    )
}
export { PgInicial }