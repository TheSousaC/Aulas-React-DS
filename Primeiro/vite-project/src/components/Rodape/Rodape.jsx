import style from './Rodape.module.css'

const Rodape = (props) => {
   const { criador } = props;

    const anoAtual = (new Date()).getFullYear();

  return (
    <div className={style.Rodape}>
        <p>React Básico - {anoAtual} - { criador }</p>
    </div>
  );
};

export { Rodape };