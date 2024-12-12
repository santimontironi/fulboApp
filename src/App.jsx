import { Main } from "./components/Main"
import { Formulario } from './components/Formulario'
import './assets/css/app.css'

const App = () => {
  return (
    <div className="contenedor">
      <Main />
      <Formulario/>
    </div>
  )
}

export default App
