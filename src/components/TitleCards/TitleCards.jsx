import React,{ useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';




function TitleCards({title,category}) {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjJiZmMwMWVmZGE2ZGFiMmVlMzBmZGRkYWJlYmRlNyIsIm5iZiI6MTcyNTYwMTk3MC45OTY0MTUsInN1YiI6IjY2ZGE5N2I3YTkxMDYxNTg0MTIxYjZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVnFxTIcDzSUmVl5TGVuiKEA0jk8egX7-PNpLYJKGb4'
    }
  };
  
  

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{
    console.log('ottatanva odum');
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
          
        })}
      </div>
    </div>
  )
}

export default TitleCards
