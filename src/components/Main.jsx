import '../assets/css/Main.css'
import logo from '../assets/img/logo.png'

export const Main = () => {
  return (
    <main>
        <img src={logo} alt="" />
        <h1>Bienvenido a <span>FulboApp</span></h1>
        <p>Juntá a tus amigos, armá el equipo y que empiece el partido.</p>
    </main>
  )
}
