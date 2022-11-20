import React, { useEffect, useState } from "react";
import { Capitais } from "./utils/listCity";
import Raffle from "./utils/Raffle";

const Aleatorio = () => {
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
            `<div>
              <h1>${main.temp}</h1>
              <h4>${sys.country}</h4>
              <h4>${name}</h4>
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
    <div className="aleatorio">
      <h3>Previsões de lugares aleatórios</h3>
      <button onClick={() => setStateActive(true)}>Começar</button>
      {
        (cidade !== "") ?
          <div dangerouslySetInnerHTML={{ __html: cidade }} /> :  ""
      }

    </div>
  );
}

export default Aleatorio;