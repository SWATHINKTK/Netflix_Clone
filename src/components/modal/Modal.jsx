import YouTube from 'react-youtube';
import { IoMdClose } from "react-icons/io";
import { TbRating16Plus } from "react-icons/tb";
import './modal.css';

function Modal({movie,modalClose}){

    const opts = {
        height: '490',
        width: '840',
        playerVars: {
            autoplay: 1,
            controls: 0,
        },
    };

    return(
        <div className='view-port '>
            <div className='videoplay-modal'>  
                <YouTube videoId={movie.id}  opts={opts} ></YouTube>
                <div className='modal-close'>
                    <IoMdClose className='close-btn text-4xl text-white bg-black' onClick={modalClose} />
                </div>
                <div className="gradient-modal-end">
                    <h1 className='movie-title'>{movie.movieData.title}</h1>
                    <h5 className='font-semibold text-gray-400 text-sm mb-3'>{movie.movieData.release_date}</h5>
                    <h5 className='movie-review'><span>Rating : </span><span className='text-green-700 font-bold'>{movie.movieData.vote_average }% </span><span className='text-gray-400'>({movie.movieData.vote_count}) votes</span></h5>
                    <h5 className='mb-3'>{movie.movieData.adult ? 'U/A 18+': "U/A 16+"} </h5>
                    <h3 className='movie-overview'>{movie.movieData.overview}</h3>
                </div> 
            </div>
        </div>
    );
}

export default Modal;