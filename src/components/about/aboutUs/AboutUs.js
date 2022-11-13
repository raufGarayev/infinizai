import React from 'react'
import './AboutUs.sass'

const AboutUs = () => {
  return (
    <section className='aboutus'>
        <div className="aboutus_head">
            <p>How We Designed An Open World For Our Game</p>
        </div>
        <div className="aboutus_video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xaudh5W9dLU?start=16&border=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
        </div>
        <div className="aboutus_text">
            <p>Despite the challenging period of the previous year, the NAVI esports club went into 2021 with big plans and clear goals. The Born to Win focused on both consolidating achievements and reaching new heights, NAVI began to appear not only on computer screens but also on mobile devices. Rocket League, Halo Infinite, Wild Rift, Brawl Stars, Free Fire, and VALORANT, conquering these disciplines is one of NAVI’s missions. While existing teams boasted outstanding results: e.g. PUBG Mobile delivered great performances on the international stage and regularly made it to the top of the championships. NAVI Counter-Strike: Global Offensive achieved the greatest heights in 2021. The Born to Win triumphed in a number of tournaments, and victory at the PGL Major Stockholm 2021 was the cherry on the cake. In addition, three NAVI players (b1t, electronic, s1mple) were included in the final Top10 rankings by HLTV.org, while s1mple topped the rankings. Also in 2021, a high-tech office with gaming penthouses was built in Kyiv, and the club’s staff grew 4 times.</p>
        </div>
    </section>
  )
}

export default AboutUs