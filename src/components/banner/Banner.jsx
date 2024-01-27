import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "../../axios/axios";
import { API_KEY, imageUrl } from "../../constants/Constants";
import './banner.css';

function Banner(){

    const [movie , setMovie] = useState();

    useEffect(() => {
        axios.get(`/trending/movie/day?language=en-US&api_key=${API_KEY}`)
            .then((response) => {
                setMovie(response.data.results[6]);
                
            });
    },[]);

    return(
        <div className="banner-section" style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
            <div className='banner-content my-auto'>
                <h1 className="banner-title">{movie ? movie.title : ''}</h1>
                <h3 className="banner-description">{movie ? movie.overview : ''}</h3>
                <div className="flex mt-8">
                    <button className="play-btn mr-4"> <FaPlay className="mr-2"/> Play</button>
                    <button className="moreinfo-btn"><IoMdInformationCircleOutline className="mr-2 text-3xl"  /> More Info</button>
                </div>
            </div>
            <div className="gradient-banner-end">

            </div> 
            
        </div>
    )
}

export default Banner;