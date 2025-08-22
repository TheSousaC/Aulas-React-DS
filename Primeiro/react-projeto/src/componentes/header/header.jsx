import { Link } from 'react-router-dom';
import style from './header.module.css'

const Header = () =>
{
    return(
        <div>
            <Link to="/">
                <h1 className={style.Header}>
                <span>ToDo </span> 
                List
                </h1>
            </Link>

            <Link to="/sobre-nos">Sobre Nós</Link>
        </div>
    )
}

export { Header };