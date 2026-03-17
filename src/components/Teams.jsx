import { TeamCard } from './TeamCard'

export const Teams = ({ players, clearTeams }) => {

    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
    const team1 = shuffledPlayers.slice(0, shuffledPlayers.length / 2)
    const team2 = shuffledPlayers.slice(shuffledPlayers.length / 2)

    const teamColors = {
        team1: {
            border: 'border-blue-400',
            badge: 'bg-blue-500 text-white',
            dot: 'bg-blue-400',
            title: 'text-blue-300',
        },
        team2: {
            border: 'border-red-400',
            badge: 'bg-red-500 text-white',
            dot: 'bg-red-400',
            title: 'text-red-300',
        },
    }

    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <div className="h-px flex-1 bg-white/10" />
                <h2 className="text-white font-black text-lg md:text-xl uppercase tracking-widest">
                    Equipos
                </h2>
                <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <TeamCard team="Equipo 1" players={team1} colors={teamColors.team1} />
                <TeamCard team="Equipo 2" players={team2} colors={teamColors.team2} />
            </div>

            <button
                onClick={clearTeams}
                className="w-full border border-white/20 hover:border-white/40 hover:bg-white/5 active:scale-95
                   text-green-300 hover:text-white font-semibold text-sm md:text-base uppercase tracking-wider
                   rounded-xl py-3 transition-all duration-150"
            >
                Limpiar equipos
            </button>
        </div>
    )
}