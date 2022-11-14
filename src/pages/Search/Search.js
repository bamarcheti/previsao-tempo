import React, { useState } from 'react';
import './Search.css';

function Search(props) {
  const [cidade, setCidade] = useState("");

  function searchInput(e) {

    e.preventDefault();
    let currentValue = document.querySelector('input[id=searchInput]').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?id=${currentValue}&appid=1d3eab340d211f75719834e8e5b197e2&units=metric`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const { main, name, sys, weather } = data;

        if (sys !== undefined) {
          if (weather !== undefined) {
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
            setCidade(`
            <div>
              <p>${main.temp}</p>
              <p>${sys.county}</p>
              <p>${name}</p>
              <p>${weather[0]['description']}</p>
              <img src="${icon}" />
            </div>      
          `)
          }
        } else {
          setCidade("");
        }
      })
  }
  console.log();

  return (
    <div className="searchWraper">
      <div className="search">
        <h2>Digite o nome da cidade:</h2>
        <form onSubmit={(e) => searchInput(e)}>
          <input placeholder={props.placeholder} type="text" name="seachInput" />
          <input className="submit" type="submit" value="Pesquisar" />
        </form>
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