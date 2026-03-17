import logo from '../assets/img/logo.png'
import { Form } from './Form'

export const Home = () => {
  return (
    <section className="min-h-screen bg-zinc-900 flex flex-col items-center px-4 py-10 md:py-16 xl:py-20 relative overflow-hidden">

      <div className="absolute rounded-full top-20 left-20 w-40 h-40 bg-green-500/30 blur-3xl" />
      <div className="absolute rounded-full top-40 right-20 w-60 h-60 bg-yellow-500/30 blur-3xl" />

      <div className="absolute rounded-full bottom-32 left-1/2 -translate-x-1/2 w-80 h-80 bg-green-600/15 blur-3xl" />

      <div className="absolute -top-12 -left-12 w-56 h-56 rounded-full border border-green-500/15" />
      <div className="absolute -top-6 -left-6 w-36 h-36 rounded-full border border-green-400/20" />
     
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-yellow-400/12" />
      <div className="absolute -top-6 -right-6 w-44 h-44 rounded-full border border-yellow-400/18" />
      
      <div className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full border border-green-500/10" />

      <div className="absolute top-1/4 left-8 w-1.5 h-1.5 rounded-full bg-green-400/50" />
      <div className="absolute top-1/3 right-12 w-2 h-2 rounded-full bg-yellow-400/40" />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-white/20" />
      <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-green-300/35" />

      <div className="relative z-10 flex flex-col items-center text-center mb-10 md:mb-14">
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-green-400/15 blur-2xl scale-[2]" />
          <img
            src={logo}
            alt="FulboApp logo"
            className="relative w-24 h-24 md:w-32 md:h-32 xl:w-46 xl:h-46 mb-0 drop-shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-black text-white mb-3">
          Bienvenido a{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-yellow-500">
            FulboApp
          </span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg xl:text-xl max-w-md leading-relaxed">
          Juntá a tus amigos, formá el equipo y que ruede la pelota.
        </p>

        <div className="mt-5 flex items-center gap-2">
          <div className="w-10 h-px bg-green-500/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
          <div className="w-10 h-px bg-green-500/40" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-lg md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        <Form />
      </div>

    </section>
  )
}