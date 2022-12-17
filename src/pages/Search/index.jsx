import { React, useState } from 'react';
import Api from '../../components/Api/Api';

const Search = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col rounded-lg p-6 m-10 bg-white">
      <div className="flex flex-col justify-center">
        <h3 className='font-bold text-base'>Digite o nome da cidade:</h3>
        <div className='flex'>
          <input className='h-8 rounded-md border-black border-2 m-2 p-1' placeholder={'Digite aqui...'} onChange={(e) => { setValueSearch(e.target.value) }} type="text" />
          <button className='m-1 p-2 rounded-md text-white bg-indigo-800 font-bold hover:text-gray-400' onClick={() => { setSearch(<Api valueSearch={valueSearch} />) }}>Pesquisar</button>
        </div>
      </div>

      {
        (search !== '') ?
          search : <div>Pesquise por algo acima...</div>
      }
    </div>
  )
}

export default Search;