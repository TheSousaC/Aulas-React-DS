import style from './campotexto.module.css'

const CampoTexto = (props) =>{
    return(
        <input type="text" {...props} className={style.CampoTexto} />
    )
}
export { CampoTexto }