import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://wallpapercave.com/wp/wp15042428.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Notre blog dédié aux mangas et aux animes est un espace passionnant où les amateurs de ces univers captivants peuvent se retrouver pour partager leur amour pour les histoires, les personnages et les mondes imaginaires. 
        Que vous soyez un fan de longue date ou que vous découvriez tout juste cet univers des mangas et des animes, notre blog est là pour vous offrir une expérience enrichissante et divertissante.
      !!!</p>
      <button className="btn btn-primary"><Link href="/Articles">Get Started</Link></button>
    </div>
  </div>
</div>
  )
}

export default Hero