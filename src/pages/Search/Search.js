import { React, useState } from 'react';
import Api from '../../components/Api';
import './Search.css';

const Search = () => {
  const [valorPesquisa, setValorPesquisa] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <div className="searchWraper">
      <div className="search">
        <h3>Digite o nome da cidade:</h3>
        <input placeholder={'Digite aqui...'} onChange={(evt) => { setValorPesquisa(evt.target.value) }} type="text" />
        <button onClick={() => Api(valorPesquisa)}>Pesquisar</button>
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