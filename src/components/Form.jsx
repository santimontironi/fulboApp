import { useState } from "react"
import { Teams } from "./Teams"

export const Form = () => {
    const [count, setCount] = useState(10)
    const [players, setPlayers] = useState(Array(10).fill(''))
    const [noPlayers, setNoPlayers] = useState(false)
    const [playersAdded, setPlayersAdded] = useState(false)

    function handleForm(event) {
        event.preventDefault()
        const playersEmpty = players.some(player => player.trim() === '')
        if (playersEmpty) {
            setNoPlayers(true)
            return
        }
        setNoPlayers(false)
        setPlayersAdded(true)
    }

    function handlePlayer(event, index) {
        const newPlayers = [...players]
        newPlayers[index] = event.target.value
        setPlayers(newPlayers)
    }

    function handleCount(event) {
        const newCount = parseInt(event.target.value)
        setCount(newCount)
        setPlayers(Array(newCount).fill(''))
        setPlayersAdded(false)
        setNoPlayers(false)
    }

    function clearTeams() {
        setPlayersAdded(false)
    }

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 xl:p-10 shadow-xl">

            <form onSubmit={handleForm}>

                <div className="mb-6">
                    <label className="block text-green-300 text-sm font-semibold uppercase tracking-widest mb-2">
                        Cantidad de jugadores
                    </label>
                    <select
                        value={count}
                        onChange={handleCount}
                        className="w-full bg-zinc-800 border border-white/20 text-white rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer md:text-lg transition-all duration-150"
                    >
                        <option value={10}>10 jugadores — Fútbol 5</option>
                        <option value={12}>12 jugadores — Fútbol 6</option>
                        <option value={14}>14 jugadores — Fútbol 7</option>
                        <option value={16}>16 jugadores — Fútbol 8</option>
                        <option value={22}>22 jugadores — Fútbol 11</option>
                    </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 mb-6">
                    {players.map((player, index) => (
                        <div key={index} className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-400 font-bold text-sm w-5 text-center select-none">
                                {index + 1}
                            </span>
                            <input
                                type="text"
                                placeholder={`Jugador ${index + 1}`}
                                value={player}
                                onChange={(event) => handlePlayer(event, index)}
                                className={`w-full bg-zinc-800/60 border text-white placeholder-zinc-500
                                    rounded-xl pl-9 pr-4 py-3 text-sm md:text-base
                                    focus:outline-none focus:ring-2 focus:border-transparent
                                    transition-all duration-150
                                    ${noPlayers && player.trim() === ''
                                        ? 'border-red-500/60 focus:ring-red-500/50 bg-red-500/5'
                                        : 'border-white/10 focus:ring-yellow-400'
                                    }`}
                            />
                        </div>
                    ))}
                </div>

                {noPlayers && (
                    <div className="mb-6 flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                        <span className="text-red-400 text-lg leading-none mt-0.5">⚠</span>
                        <div>
                            <p className="text-red-400 text-sm font-bold">Faltan jugadores</p>
                            <p className="text-white/70 text-xs mt-0.5">
                                Completá todos los campos antes de armar los equipos.
                            </p>
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-yellow-400 hover:bg-yellow-300 active:scale-95 text-zinc-900 font-black text-base md:text-lg cursor-pointer rounded-xl py-4 transition-all duration-150 shadow-md shadow-yellow-500/20 uppercase tracking-wide"
                >
                    Armar equipos
                </button>

            </form>

            {playersAdded && (
                <div className="mt-8">
                    <Teams players={players} clearTeams={clearTeams} />
                </div>
            )}

        </div>
    )
}