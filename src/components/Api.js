import axios from 'axios';
import { useState } from 'react';

let oldPesquisa = '', gatilho = false;

const Api = (props) => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';
  const [resultado, setResultado] = useState('');

  if (oldPesquisa !== props.valorPesquisa) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.valorPesquisa}&appid=${keyID}&units=metric`)
      .then(res => {
        const { main, name, sys, weather } = res.data;
        if (sys !== undefined) {
          if (weather !== undefined) {
            setResultado(res.data);

            console.log('THALIA: Deu certo aqui na API');
            console.log('THALIA: Olha só oq eu consegui ^^');
            console.log('THALIA: ', main, name, sys, weather);

            oldPesquisa = props.valorPesquisa;
            gatilho = true;
          }
        }
      });
  } else if (gatilho) { gatilho = false; }

  if (!gatilho) {
    gatilho = true;
    oldPesquisa = '';
  }

  const { main, name, sys, weather } = resultado;
  return (<div className="resultado row">
    <div>
      <h1>{Math.round(main?.temp)}°</h1>
      <h4>{sys?.country}</h4>
      <h4>{name}</h4>
      { (weather !== undefined)? <h4>{weather[0]['description']}</h4> : <h4>Carregando...</h4>}
    </div>
    <div>
      <h4>🌡️</h4>
      <h4>Máx<span>↑</span>{Math.round(main?.temp_max)}°</h4>
      <h4>Mín<span>↓</span>{Math.round(main?.temp_min)}°</h4>
    </div>
  </div>);

}

export default Api;