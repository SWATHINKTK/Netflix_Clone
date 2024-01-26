import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import './banner.css';

function Banner(){
    return(
        <div className="banner-section">
            <div className='banner-content my-auto'>
                <h1 className="banner-title">Money Height</h1>
                <h3 className="banner-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis animi voluptas, debitis e</h3>
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