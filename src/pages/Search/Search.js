import { React, useState } from 'react';
import './Search.css';

const Search = () => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';

  const [valorPesquisa, setValorPesquisa] = useState("");
  const [Cidade, setCidade] = useState("");

  const resultadoAtualizado = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valorPesquisa}&appid=${keyID}&units=metric`)
      .then(res => res.json())
      .then(data => {
        const { main, name, sys, weather } = data;
        if (sys !== undefined) {
          if (weather !== undefined) {
            setCidade(
              `<div>
                <h1> ${main.temp} </h1>
                <h4> ${name} </h4>
                <h4> ${main.temp} </h4>
                <h4> ${main.temp} </h4>
              </div>`);
          }
        }
      });
  }

  return (
    <div className="searchWraper">
      <div className="search">
        <h2>Digite o nome da cidade:</h2>
        <input placeholder={'Exemplo: Campo Grande...'} onChange={(evt) => { setValorPesquisa(evt.target.value) }} type="text" />
        <button onClick={() => resultadoAtualizado()}>Pesquisar</button>
      </div>

      <br />

      {
        (Cidade !== "") ?
          <div dangerouslySetInnerHTML={{ __html: Cidade }} /> : <div>Pesquise por algo acima...</div>
      }
    </div>
  )
}

export default Search;