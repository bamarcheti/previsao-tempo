import React, { useEffect, useState } from "react";
import ResultApi from "../../components/ResultApi";
import Raffle from "./utils/Raffle";
import { Capitais } from "./utils/listCity";

const Random = () => {
  const [search, setSearch] = useState('');
  const [valueSearch, setValueSearch] = useState(false);

  useEffect(() => {
    const response = setInterval(() => {
      if (valueSearch) {
        setSearch(<ResultApi valueSearch={Capitais[Raffle(0, 26)][0]} />);
      }
    }, 3000);
    return () => clearInterval(response);
  })

  return (
    <div className="flex flex-col rounded-lg p-6 m-10 bg-white">
      <div className="flex flex-col justify-center">
        <h3 className='font-bold text-base'>Previsões Aleatórias de Capitais</h3>
        <button className='mt-2 p-2 rounded-md text-white bg-indigo-800 font-bold hover:text-gray-400' onClick={() => setValueSearch(true)}>Começar</button>
      </div>

      {
        (search !== "") ?
          search : ""
      }
    </div>
  );
}

export default Random;