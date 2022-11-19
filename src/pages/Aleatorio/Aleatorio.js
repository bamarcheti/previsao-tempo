import React, { useEffect, useState } from "react";

const Aleatorio = () => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';

  const [valorPesquisa, setValorPesquisa] = useState("");
  const [cidade, setCidade] = useState("");

  const resultadoAtualizado = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorPesquisa}&appid=${keyID}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const { main, name, sys, weather } = data;
        if (sys !== undefined) {
          if (weather !== undefined) {
            setCidade(
              `<div>
              <h1>${main.temp}</h1>
              <h4>${sys.country}</h4>
              <h4>${name}</h4>
              <h4>${weather[0]['description']}</h4>
              </div>`);
          }
        }
      });
    setValorPesquisa(setCidade());
  }
  console.log('passou aqui');

  useEffect(() => {
    const response = setInterval(() => {
      setValorPesquisa(setCidade());
    }, 2000);

    return response;
  })


  return (
    <div className="aleatorio">
      <h3>Previsões de lugares aleatórios</h3>
      <button onClick={() => resultadoAtualizado()}>Começar</button>
      <h3>{resultadoAtualizado}</h3>
    </div>
  );
}

export default Aleatorio;