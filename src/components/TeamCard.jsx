export const TeamCard = ({ team, players, colors }) => (
    <div className={`flex-1 bg-white/5 border ${colors.border} rounded-2xl p-5 md:p-6`}>
        <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${colors.badge}`}>
                {team}
            </span>
            <span className="text-green-400 text-sm font-medium">{players.length} jugadores</span>
        </div>
        <ul className="space-y-2">
            {players.map((player, index) => (
                <li
                    key={index}
                    className="flex items-center gap-3 text-white text-sm md:text-base py-2 border-b border-white/5 last:border-0"
                >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${colors.dot}`} />
                    {player}
                </li>
            ))}
        </ul>
    </div>
)
