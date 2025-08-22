import { Routes } from './react-router-dom'
import { PgInicial } from '../pages'
import { SobreNos } from '../pages/SobreNos'

const Router = () =>{
    return(
        <Routes>
            <Route path="/" element={<PgInicial />} />
            <Route path="Sobre-Nos" element={<SobreNos />} />
        </Routes>
    )
}
export { Router }