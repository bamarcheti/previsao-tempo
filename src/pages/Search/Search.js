import React, { useState } from 'react';
import ResultSearch from './components/ResultSearch';
import './Search.css';


const Search = (props) => {
  const [cidade, setCidade] = useState([]);
  
  const resultadoAtualizado = () => {
    // setCidade(GetWeather(props.name));
    return 'OI';
  }
  
  return (
    <div className="searchWraper">
      <div className="search">
        <h2>Digite o nome da cidade:</h2>
        <form>
          <input placeholder={props.placeholder} type="text" name="searchInput" />
          <button onClick={() => setCidade(resultadoAtualizado())}>Pesquisar</button>
        </form>
      </div>

      <br />

      {
        (cidade !== "") ?
          <ResultSearch temp="30°" /> : <div>Pesquise por algo acima...</div>
      }
    </div>
  )
}

export default Search;