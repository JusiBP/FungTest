import logo from './logo.svg';
import { Input } from 'antd';
import './App.css';
import axios from 'axios';
import FilmCard from './components/FilmCard';

import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

const apiUrl = "https://imdb-api.tprojects.workers.dev/search?query="

function App() {

  const [search, setSearch] = useState("");
  const [filmL, setFilmL] = useState([]);

    const searchFilms = (e) => {
      console.log("hey from searchFilms -->", e)
        setSearch(e.target.value)
    }

    useEffect(()=>{
      axios.get(apiUrl+search)
      .then(result => {
        result.data.results.map(console.log)
        setFilmL(result.data.results)
      })
      },[search])


  return (
    <div className="App">
    <h1>Search your film App</h1>
    <div className='searchModule'>
    <p className='lupa'>🔎 </p><Input className="searchBar" value={undefined} type="text" onChange={searchFilms} />
    </div>
    <div className='filmComp'>
          {filmL.length === 0 && <div>No film seacrhed</div>} 
            {filmL.length >0 && filmL.map(film => {
                return <FilmCard film={film}/>
            })}
    </div>
    </div>
  );
}

export default App;
