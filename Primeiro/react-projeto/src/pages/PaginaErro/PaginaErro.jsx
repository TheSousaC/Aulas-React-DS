import style from './PaginaErro.module.css'

const PgErro = () =>{
    return(
        <div className={style.Erro}>
            <h1> Erro 404 </h1>
            <h2>Volte para a Página Inicial</h2>
        </div>
    )
}
export { PgErro }