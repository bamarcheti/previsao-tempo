import { React, useState } from 'react';
import './Search.css';

const Search = () => {
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
              `<div className="resultado row">
                <div>
                  <h1>${Math.round(main.temp)}°</h1>
                  <h4>${sys.country}</h4>
                  <h4>${name}</h4>
                  <h4>${weather[0]['description']}</h4>
                </div>
                <div>
                  <h4>🌡️</h4>
                  <h4>Máx<span>↑</span>${Math.round(main.temp_max)}°</h4>
                  <h4>Mín<span>↓</span>${Math.round(main.temp_min)}°</h4>
                </div>
              </div>`
            );
          }
        }
      });
  }

  return (
    <div className="searchWraper">
      <div className="search">
        <h2>Digite o nome da cidade:</h2>
        <input placeholder={'Digite aqui...'} onChange={(evt) => { setValorPesquisa(evt.target.value) }} type="text" />
        <button onClick={() => resultadoAtualizado()}>Pesquisar</button>
      </div>

      <br />

      {
        (cidade !== "") ?
          <div dangerouslySetInnerHTML={{ __html: cidade }} /> : <div>Pesquise por algo acima...</div>
      }
    </div>
  )
}

export default Search;