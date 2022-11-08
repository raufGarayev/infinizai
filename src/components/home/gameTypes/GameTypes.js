import React from 'react'
import './GameTypes.sass'
import Aim from '../../../assets/img/game-types/aim.svg'
import Console from '../../../assets/img/game-types/console.svg'
import Compas from '../../../assets/img/game-types/compas.svg'

const GameTypes = () => {
  return (
    <section className='gametypes'>
        <div className="gametypes_left">
            <div className="gametypes_left-desc">
                <img src={Aim} alt="" />
                <p>Smooth FPS</p>
            </div>
            <div className="gametypes_left-img">
                
            </div>
        </div>
        <div className="gametypes_mid">
            <div className="gametypes_mid-desc">
                <img src={Console} alt="" />
                <p>Multiplayer</p>
            </div>
            <div className="gametypes_mid-img">
                
            </div>
        </div>
        <div className="gametypes_right">
            <div className="gametypes_right-desc">
                <img src={Compas} alt="" />
                <p>Open World</p>
            </div>
            <div className="gametypes_right-img">
                
            </div>
        </div>
    </section>
  )
}

export default GameTypes