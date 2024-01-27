import React,{useEffect, useState} from 'react';
import axios from '/src/axios/axios.js';
import { API_KEY, imageUrl } from '../../constants/Constants';
import './genre.css';
import Modal from '../modal/Modal';

function Genre({url,title}){

    const [movies , setMovies] = useState([]);
    const [movieId, setMovieId] = useState();



    useEffect(()=>{
        axios.get(url)
            .then((response) => {
                setMovies(response.data.results);
                console.log(response.data.results)
            })
    },[])


    const handleMovie = (obj) => {
        axios.get(`/movie/${obj.id}/videos?api_key=${API_KEY}`)
            .then((response) => {
                setMovieId({id:response.data.results[0].key,movieData:obj});
            })
    }

    const removeMOdal = () =>{
        setMovieId();
    }

    return(
        <div className="genre-main-div">
            <h1 className='genre-heading'>{title}</h1>
            <div className='genre-image-view'>
                { 
                    movies.map((obj) => {
                        return <img key={obj.id} onClick={() => handleMovie(obj)} src={`${imageUrl+obj.backdrop_path}`} alt="genre image Loading" />
                    })
                }
            </div>  
            {movieId && <Modal movie={movieId} modalClose={removeMOdal}/>}
        </div>
       
    )
}

export default Genre;