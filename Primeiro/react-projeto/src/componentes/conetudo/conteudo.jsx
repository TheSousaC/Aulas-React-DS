import style from './conteudo.module.css'

const Conteudo = (props) => {
    const {children} = props;
    return(
        <div>
            <p className={style.Conteudo}>{children}</p>
        </div>
    )
}
export {Conteudo}