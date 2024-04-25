
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h2 className="logo">GoTech</h2>
            <div className="links">
            <a href="/"><button>Home</button></a>
            <a href="/contribute"><button>Contribute</button></a>
            {/* <a href="/About"><button>About Us</button></a> */}

            </div>
           
        </div>
     );
}
 
export default Navbar;