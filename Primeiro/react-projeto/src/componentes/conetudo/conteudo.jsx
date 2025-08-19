import style from './conteudo.module.css'

const Conteudo = (props) => {
    const {children} = props;
    return(
        <>
            <p className={style.Conteudo}>{children}</p>
        </>
    )
}
export {Conteudo}