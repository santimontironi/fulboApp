import '../assets/css/equipos.css'

export const Equipos = ({ jugadores, limpiarEquipos }) => {

    const jugadoresAleatorios = [...jugadores].sort(() => Math.random() - 0.5);
    //Este método organiza los elementos del array en función de una función de comparación que tú defines.
    //Si la función devuelve un valor negativo, el primer elemento va antes que el segundo.
    //Si devuelve un valor positivo, el primer elemento va después que el segundo.
    //Si devuelve 0, no cambia el orden entre los dos.

    const equipo1 = jugadoresAleatorios.slice(0, jugadoresAleatorios.length / 2); //corta al array desde el principio hasta la mitad.
    const equipo2 = jugadoresAleatorios.slice(jugadoresAleatorios.length / 2); //corta al array desde la mitad hasta el final.

    return (
        <div className='contenedor-equipos'>
            <h1 className='titulo'>Equipos generados</h1>
            <div className="equipos">
                <div className="equipo">
                    <h2>Equipo 1</h2>
                    <ul>
                        {equipo1.map((jugador, index) => (
                            <li key={index}>{jugador}</li>
                        ))}
                    </ul>
                </div>
                <div className="equipo">
                    <h2>Equipo 2</h2>
                    <ul>
                        {equipo2.map((jugador, index) => (
                            <li key={index}>{jugador}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button onClick={limpiarEquipos}>Limpiar equipos</button>
        </div>
    )
}
