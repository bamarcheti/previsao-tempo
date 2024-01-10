import { React, useState } from 'react';
import Api from '../../components/Api/Api';

const Search = () => {
  const [valueSearch, setValueSearch] = useState('');
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col rounded-lg p-7 bg-white">
      <div className="flex flex-col justify-center gap-2">
        <h3 className='font-bold text-base'>Digite o nome da cidade:</h3>
        <div className='flex items-center gap-3'>
          <input className='h-8 rounded-md border-black border-2 px-2' placeholder={'Digite aqui...'} onChange={(e) => { setValueSearch(e.target.value) }} type="text" />
          <button className='h-8 px-4 rounded-md text-white bg-indigo-800 font-bold hover:text-gray-400' onClick={() => { setSearch(<Api valueSearch={valueSearch} />) }}>Pesquisar</button>
        </div>
        {
          (search !== '') ?
            search : <div>Pesquise por algo acima...</div>
        }
      </div>

    </div>
  )
}

export default Search;