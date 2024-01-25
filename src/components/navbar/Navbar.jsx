function Navbar(){
    return(
        <nav className="h-16 w-100 flex flex-row">
            <div>
                <img src="/images/Netflix-logo.png" alt="logo"/>            
            </div>
            <div className="flex items-center">
                <h3 className="ml-4">Home</h3>
                <h3 className="ml-4">TV Shows</h3>
                <h3 className="ml-4">Movies</h3>
                <h3 className="ml-4">News & Popular</h3>
                <h3 className="ml-4">My List</h3>
                <h3 className="ml-4">Browse by Languages</h3>
            </div>
        </nav>
    )
}

export default Navbar;