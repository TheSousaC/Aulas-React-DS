import style from './Conteudo.module.css'

const Conteudo = (props) => {
    return (
        <div className={style.Conteudo}>
            {props.children}
        </div>
    );
};

export {Conteudo};