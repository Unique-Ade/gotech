import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2 className="logo">GoTech</h2>
            <div className="links">
            <Link to="/"><button>Home</button></Link>
            <Link to="/contribute"><button>Contribute</button></Link>

            </div>
           
        </nav>
     );
}
 
export default Navbar;