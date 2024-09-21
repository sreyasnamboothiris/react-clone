import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'



function Player() {

  const {id} = useParams();
  const navigate = useNavigate();



  const [apiVideo,setApiVideo] = useState({name:'',key:'',published_at:'',typeof:''})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjJiZmMwMWVmZGE2ZGFiMmVlMzBmZGRkYWJlYmRlNyIsIm5iZiI6MTcyNTYwMTk3MC45OTY0MTUsInN1YiI6IjY2ZGE5N2I3YTkxMDYxNTg0MTIxYjZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVnFxTIcDzSUmVl5TGVuiKEA0jk8egX7-PNpLYJKGb4'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiVideo(response.results[0]))
    .catch(err => console.error(err));
  },[])
  


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src= {`https://youtube.com/embed/${apiVideo.key}`} title='trailer' allowFullScreen frameBorder='0' ></iframe>
      <div className="player-info">
        <p>{apiVideo.published_at.slice(0,10)}</p>
        <p>{apiVideo.name}</p>
        <p>{apiVideo.typeof}</p>
      </div>
    </div>
  )
}

export default Player
