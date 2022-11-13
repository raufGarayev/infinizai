import React, {useRef} from 'react'
import './Results.sass'
import UnderlineSponsors from '../../../assets/img/underline-sponsors.svg'
import { useCountUp } from 'react-countup';

const Results = () => {
  const tourns = useRef(null);
  const gawards = useRef(null)
  const team = useRef(null)
  const years = useRef(null)
  useCountUp({
    ref: tourns,
    start: 0,
    end: 35,
    delay: 0,
    duration: 1,
  });
  useCountUp({
    ref: gawards,
    start: 0,
    end: 20,
    delay: 0,
    duration: 1,
  });
  useCountUp({
    ref: team,
    start: 0,
    end: 14,
    delay: 0,
    duration: 1,
  });
  useCountUp({
    ref: years,
    start: 0,
    end: 8,
    delay: 0,
    duration: 1,
  });

  return (
    <section className='results'>
      <div className="results_head">
        <p>Our Results</p>
        <img src={UnderlineSponsors} alt="underline" />
      </div>
      <div className="results_desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
      </div>
      <div className="results_numbers">

        <div className="results_numbers-data">
          <span ref={tourns} className='counter'></span>
          <p>Tournaments</p>
        </div>
        <div className="results_numbers-data">
          <span ref={gawards} className='counter'></span>
          <p>Global Awards</p>
        </div>
        <div className="results_numbers-data">
          <span ref={team} className='counter'></span>
          <p>Team Members</p>
        </div>
        <div className="results_numbers-data">
          <span ref={years} className='counter'></span>
          <p>Years going</p>
        </div>
      </div>
    </section>
  )
}

export default Results