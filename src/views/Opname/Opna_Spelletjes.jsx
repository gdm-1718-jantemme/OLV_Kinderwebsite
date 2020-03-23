import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


import '../../sass/app.scss';
import '../../sass/views/_spelletjes.scss';

export default function Opna_Spelletjes() {
  useEffect(() => {
    const audio = new Audio('/audio/spelletjes.wav');
    audio.play();

    localStorage.setItem('silencePreviousPage', true);
  }, []);

  return (
    <section className="container space" id="planets">
      {/* <div className="loading">
                <div className="rocket_ani">
                    <Lottie options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
            </div> */}
      <div className="heading_container">
        <Link className="back" to="/opname"><img src="/homepage/terug.svg" alt="terug" /></Link>
        <h1 className="planetName">Spelletjes</h1>
        <a href="https://www.olvz.be">
          <img className="logo" src="/homepage/logolvp.svg" alt="logo" />
        </a>
      </div>

      <div className="planet_container_C">
        <Link className="planet_C" to="/dagkliniek"><img src="/homepage/dagkliniek.svg" alt="dagkliniek" /></Link>
        <Link className="planet_C" to="/consultatie"><img src="/homepage/consultatie.svg" alt="consultatie" /></Link>
      </div>

      <div className="container_content_spel">
        <div className="container_action_spel">

          <Link className="game" to="/opname/spelletjes/rugzak">
            <h2>Rugzakspel</h2>
            <img src="/spelletjes_page/rugzak.svg" alt="game" />
          </Link>

          <Link className="game" to="/opname/spelletjes/virusspel">
            <h2>Virusspel</h2>
            <img src="/spelletjes_page/virusspel.svg" alt="game" />
          </Link>

          <Link className="game" to="/opname/spelletjes/lichaamspel">
            <h2>Lichaamspel</h2>
            <img src="/spelletjes_page/lichaamspel.svg" alt="game" />
          </Link>

          <Link className="game" to="/opname/spelletjes/memory">
            <h2>Memory</h2>
            <img src="/spelletjes_page/memory.svg" alt="game" />
          </Link>

          <img className="olivia-rocket" src="/spelletjes_page/olivia-raket.svg" alt="olivia" />
        </div>
        <div className="planet_bg">
          <img src="/homepage/planeet_opname.svg" alt="planet" />
        </div>
      </div>
    </section>
  );
}
