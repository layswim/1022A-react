import './App.css'
import MeuComponente from './componentes/MeuComponente'
function App() {
  let nome = "lays"
  let sobrenome = "wimmer"
 return (
  <div>
  <h1 className= "meu-nome">Olá, eu sou {nome} {sobrenome}!</h1>
  <h1>Olá, eu sou {nome} {sobrenome}!</h1>
  </div>
 ) //JSX - Javascript XML
}
export default App
