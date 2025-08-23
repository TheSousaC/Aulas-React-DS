import { Routes, Route } from 'react-router-dom'
import { PgInicial, SobreNos } from './pages'
import { LayoutPadrao } from './Layouts'

const Router = () =>{
    return(
            <Routes>
                <Route path='/' element={<LayoutPadrao />}>
                    <Route path='/' element={<PgInicial />} />
                    <Route path='Sobre-Nos' element={<SobreNos />} />
                </Route>
            </Routes>

    )
}
export { Router }