import axios from 'axios';
import React, { useEffect, useState } from 'react'
import requests from '../Request';

const Call = () => {
    const [movies,setMovies]=useState([]);
    const movie=movies[Math.floor(Math.random()* movies.length)]

    useEffect(()=>{
      axios.get(requests.requestPopular).then((Response)=>{
        setMovies(Response.data.results)
      }
      )
    },[])
    const truncate=(str,num)=>{
        if(str.length>num){
          return(str.slice(0,num)+'...');
        }
        else{
          return str;
        }
    }
    console.log(movie);
  return (
    <div className='w-full h-[600px] text-white'>
      <div className='h-full w-full'>
        <div className='h-[600px] w-full absolute bg-gradient-to-r from-black'></div>
        <img className=" w-full h-full object-cover"src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
        <div className='w-full top-[20%] absolute text-white p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.original_title}</h1>
        <div className='my-4'>
          <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
          <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Watch Later</button>
        </div>
        <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
        <p className='my-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncate(movie?.overview,200)}</p>
        </div>
      </div>
      
    </div>
  )
}
export default Call
