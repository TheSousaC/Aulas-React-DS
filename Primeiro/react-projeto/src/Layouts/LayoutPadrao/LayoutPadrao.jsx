import { Outlet } from 'react-router-dom'
import { Header, Conteudo, Footer} from '../../componentes'
import { UseAppContext } from '../../hooks'

const LayoutPadrao = () =>{
    const {Criador} = UseAppContext()
    return(
         <>
            <Header />
            <Conteudo>
            <Outlet />
            </Conteudo>
            <Footer Criador={Criador} />
        </>
    )
}
export { LayoutPadrao }