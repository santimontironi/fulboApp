import { useState } from "react"
import '../assets/css/formulario.css'
import { Equipos } from "./Equipos"

export const Formulario = () => {

  const [cantidad, setCantidad] = useState(10)
  const [jugadores, setJugadores] = useState(Array(10).fill(''))
  const [jugadoresAgregados,setJugadoresAgregados] = useState(false)

  function handleForm(event) {
    event.preventDefault()
    setJugadoresAgregados(true)
  }

  function handleJugador(event, index) {
    const nuevosJugadores = [...jugadores]
    nuevosJugadores[index] = event.target.value
    setJugadores(nuevosJugadores)
  }

  function handleCantidad(event) {
    const nuevaCantidad = parseInt(event.target.value)
    setCantidad(nuevaCantidad)
    setJugadores(Array(nuevaCantidad).fill(''))
  }

  return (
    <form onSubmit={handleForm}>
      <label>
        Numeros de jugadores:
        <select value={cantidad} onChange={handleCantidad}>
          <option value={10}>10</option>
          <option value={12}>12</option>
          <option value={16}>16</option>
        </select>
      </label>

      <div className="jugadores">
        {jugadores.map((jugador, index) => (
          <input
            key={index}
            type="text"
            placeholder={"Jugador" + (index + 1)}
            value={jugador}
            onChange={(event) => handleJugador(event,index)}
            required
          />
        ))}
      </div>

      <input type="submit" value="Agregar jugadores" />

      {jugadoresAgregados && (
        <Equipos jugadores={jugadores} />
      )}

    </form>
  )
}
