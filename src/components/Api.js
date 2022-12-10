import axios from 'axios';
import { useEffect, useState } from 'react';

const Api = (props) => {
  const keyID = '276028a84e6f633afbd7b4e1d68552bf';

  const [cidade, setCidade] = useState("<h4>Carregando</h4>");

  const getCidades = async (props) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${props.valorPesquisa}&appid=${keyID}&units=metric`)
      .then(res => {
        const { main, name, sys, weather } = res.data;
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

  useEffect(() => {
    const interval = setInterval(() => {
      getCidades()
    }, 4500)
    return () => clearInterval(interval);
  })
  
}  

export default Api;