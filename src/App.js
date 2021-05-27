import React , { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './UI/Header';
import CharactersGrid from './components/CharactersGrid';
import Search from './components/Search';
import './App.css';
// require('dotenv').config();

const hash = process.env.REACT_APP_API_KEY

const App = () => {

  const [items,setItems] = useState([]);
  const [isLoading,setLoading] = useState(true);
  const [query,setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async() => {
      if(query === '')
      {
        const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ec803ef1202e4b24d7a6a2e959e86480&hash=${hash}`)
        console.log(resp.data.data.results)
        setItems(resp.data.data.results)
        setLoading(false)
      }else
      {
        const resp = await axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=ec803ef1202e4b24d7a6a2e959e86480&hash=${hash}`)
        console.log(resp.data.data.results)
        setItems(resp.data.data.results)
        setLoading(false)
      }
      
    }

    fetchItems()
  },[query]);


  return (
    <div className = 'container'>
      <Header />
      <Search getQuery={(q)=>setQuery(q)}></Search>
      <CharactersGrid items={items} isLoading={isLoading} />
    </div>
  )
}

export default App
