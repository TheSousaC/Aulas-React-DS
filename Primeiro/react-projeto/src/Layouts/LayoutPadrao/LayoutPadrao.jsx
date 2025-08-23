import { Outlet } from 'react-router-dom'
import { Header, Conteudo, Footer} from '../../componentes'

const LayoutPadrao = () =>{
    return(
         <>
            <Header />
            <Conteudo>
            <Outlet />
            </Conteudo>
            <Footer Criador="Gabriel Costa" />
        </>
    )
}
export { LayoutPadrao }