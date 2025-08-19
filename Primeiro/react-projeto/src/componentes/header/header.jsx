import style from './header.module.css'

const Header = () =>
{
    return(
        <div>
            <h1 className={style.Header}>
                <span>ToDo </span> 
                List
            </h1>
        </div>
    )
}

export { Header };