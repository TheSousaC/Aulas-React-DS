import style from './footer.module.css'

const Footer = (props) => {
    const {Criador} = props;
    const AnoAtual = (new Date()).getFullYear();
    return(
        <div>
            <footer className={style.Footer}>
                React Basico - {AnoAtual} - {Criador}
            </footer>
        </div>
    )
}

export {Footer};