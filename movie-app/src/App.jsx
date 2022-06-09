import { useEffect, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Movie from './components/movie'
const featured_api="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const search_api="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function App() {
  const [movies,setMovies]=useState([]);
  const [search,setSearch]=useState("");
   useEffect(()=>{
    fetch(featured_api)
    .then((res)=>res.json())
    .then((data)=>{
      setMovies(data.results);
    });
       },[]);
   
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(search){

      fetch(search_api + search)
      .then((res)=>res.json())
      .then((data)=>{
        setMovies(data.results);
      });
      setSearch('');
    }
  }
  const handleChange=(e)=>{
    setSearch(e.target.value);

  }

  return (
    <div className='all'>
    
    <header>
    <p className='name'><span className='p_letter'>P</span>ogm</p>
      <form onSubmit={handleSubmit}>
    <input type="search" placeholder='Search....' value={search}  onChange={handleChange}/>
    </form>
  </header>
<div className='main'>
  
{movies.length>0 &&
  movies.map(movie=>(
<Movie key={movie.id} {...movie}/>
))}
</div>
</div>
  )
  
    
  
}

export default App
