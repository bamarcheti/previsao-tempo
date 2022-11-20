import React, { useEffect, useState } from "react";
import './Random.css';
import { Capitais } from "./utils/listCity";
import Raffle from "./utils/Raffle";

const Random = () => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';

  const [cidade, setCidade] = useState("");
  const [stateActive, setStateActive] = useState(false);

  const resultadoAtualizado = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capitais[Raffle(0, 26)][0]}&appid=${keyID}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const { main, name, sys } = data;
        if (sys !== undefined) {
          setCidade(
            `<div className="resultado row">
              <div>
                <h1>${main.temp}</h1>
              </div>
              <div>
                <h4>${sys.country}</h4>
                <h4>${name}</h4>
              </div>
            </div>`
          );
        }
      });
  }

  useEffect(() => {
    const response = setInterval(() => {
      if (stateActive) {
        resultadoAtualizado();
      }
    }, 3000);
    return () => clearInterval(response);
  })

  return (
    <div className="randomWraper">
      <div className="random">
        <h3>Previsões de lugares aleatórios</h3>
        <button onClick={() => setStateActive(true)}>Começar</button>
      </div>
      {
        (cidade !== "") ?
          <div dangerouslySetInnerHTML={{ __html: cidade }} /> : ""
      }

    </div>
  );
}

export default Random;