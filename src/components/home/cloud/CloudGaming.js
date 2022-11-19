import React from 'react'
import Fire from '../../../assets/img/fire.svg'
import './CloudGaming.sass'

const CloudGaming = () => {
  return (
    <section className='cloudgaming'>
        <div className="cloudgaming_left">
            <div className="cloudgaming_left-head">
              <div className="cloudgaming_left-head-top">
                <img src={Fire} alt="" />
                <h3>FUTURE OF ESPORTS</h3>
              </div>
                
                <p>The New Era Of Cloud Gaming Here</p>
            </div>
            <div className="cloudgaming_left-desc">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia</p>
            </div>
            <div className="cloudgaming_left-button">
              <button>Explore More</button>
            </div>
        </div>
        <div className="cloudgaming_right">
            <div className="cloudgaming_right-videoblock">

            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/xaudh5W9dLU?start=16&border=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  )
}

export default CloudGaming