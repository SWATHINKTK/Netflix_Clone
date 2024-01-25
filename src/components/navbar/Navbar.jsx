import { IoMdNotificationsOutline } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import { FaCaretDown } from "react-icons/fa";

function Navbar(){
    return(
        <nav className="h-18 w-100 flex flex-row px-4">
            <div className="md:pl-8">
                <img className="h-16" src="/images/Netflix-logo.png" alt="logo"/>            
            </div>
            <div className=" items-center hidden md:flex text-md bg-white-100">
                <h3 className="ml-4">Home</h3>
                <h3 className="ml-4">TV Shows</h3>
                <h3 className="ml-4">Movies</h3>
                <h3 className="ml-4">News & Popular</h3>
                <h3 className="ml-4">My List</h3>
                <h3 className="ml-4">Browse by Languages</h3>
            </div>
            <div className="ml-auto flex items-center md:pr-4">
            <div className="flex pr-6">
            <RiSearchLine size='1.5rem' className="mr-8"/>
            <IoMdNotificationsOutline size='1.5rem' className="mr-2" />
            
            </div>
            <div className="md:pr-10 flex">
                <img className="h-8 mr-1 rounded-md" src="/images/rightlogo.png" alt="logo"/>  
                <FaCaretDown className="mt-1" />          
            </div>

            </div>
        </nav>
    )
}

export default Navbar;