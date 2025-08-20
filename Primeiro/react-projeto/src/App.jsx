import './App.css'
import { Header, Conteudo, Footer} from './componentes'
import { PgInicial } from './pages'

function App() {

  return (
    <>
    <Header nameUser="Gabriel" />
    <Conteudo>
      <PgInicial />
    </Conteudo>
    <Footer Criador="Gabriel Costa" />
    </>
  )
}

export { App }
