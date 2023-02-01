import React, { useState, useEffect } from 'react';
import axios from 'axios'
import s from './putrequest.module.css'
import quote from '../quote.json'

const Putrequest = () => {

  const [data, setData] = useState(null)
  const [quotes] = useState(quote)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    const load = async () => {
      const responce = await axios.get('https://api.kanye.rest')
      console.log(responce.data)
      setData(responce.data.quote)
    }
    load()
  }, [])

  const handlerClick = async () => {
    const responce = await axios.get('https://api.kanye.rest')
    console.log(responce.data)
    setData(responce.data.quote)
  }
  const toggleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={s.main}>
      <div className={s.header}>
        <i class="fa-sharp fa-solid fa-water"></i>
        <a href="https://api.kanye.rest">kanye.rest</a>
        <p>A free REST API for random Kanye West quotes (Kanye as a Service)</p>
      </div>
      <div onClick={handlerClick} className={s.menu}>
        <a href="https://api.kanye.rest">https://api.kanye.rest</a>
        <button ><i class="fa-sharp fa-solid fa-infinity"></i> refresh</button>
      </div>
      <div className={s.tdoo}>
        <span>{data}</span>
        <p>-Kanye West</p>
      </div>
      <div className={s.outputs}>
        <div className={s.top}>
          <button onClick={toggleClick}> all quaters <i class="fa-solid fa-right-left"></i></button>
        </div>
        <a target='_blank' href="https://github.com/ajzbc/kanye.rest/blob/master/quotes.json">githab</a>
        <div className={s.bottom} style={{
          display: isActive ? 'none' : 'block'
        }}>
          <ol>
            {
              quotes.map(item => {
                return <li key={item}>{item}</li>
              })
            }
          </ol>
        </div>
      </div>
      <div className={s.footer}>
        <p><i class="fa-solid fa-hands-clapping"></i>@mamademinov.arsenn</p>
      </div>
    </div>
  );
};

export default Putrequest;