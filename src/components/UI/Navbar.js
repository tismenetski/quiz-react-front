import {FaLaptopCode}  from "react-icons/fa";
import {Link} from "react-router-dom";
import {useGlobalContext} from "../../context";

const Navbar = () => {

    const {isAuthenticated,logout} = useGlobalContext()


    return(
        <nav className={"navbar"}>
        <Link to={"/"}><FaLaptopCode className={"navbar-logo"}/></Link>
            <div className={"navbar-links"}>
                {!isAuthenticated &&  <Link to={"/login"}>Login</Link>}
                {!isAuthenticated &&  <Link to={"/register"}>Register</Link>}
                {isAuthenticated && <button onClick={logout} >Logout</button>}
            </div>
        </nav>
    )
}

export default Navbar