import style from './PaginaError.module.css'

const PaginaError = () => {
    return (
      <>
      <div className={style.PaginaError}>
      <h1>404</h1>
      <h3>Página não encontrada</h3>
      </div>
      </>
    );
};

export { PaginaError }