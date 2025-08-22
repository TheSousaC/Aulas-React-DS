import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Header, Conteudo, Footer} from './componentes'
import { PgInicial } from './pages'

function App() {

  return (
    <>
    <BrowserRouter>
      <Router />
    {/* <Header nameUser="Gabriel" />
    <Conteudo>
      <PgInicial />
    </Conteudo>
    <Footer Criador="Gabriel Costa" /> */}
    </BrowserRouter>
    </>
  )
}

export { App }
