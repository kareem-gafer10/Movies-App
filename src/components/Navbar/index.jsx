import { Link, useNavigate } from "react-router-dom";
import { FaFacebook,FaYoutube ,FaInstagram,FaSpotify,FaBars} from "react-icons/fa";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {

  const {userData,setUserData} = useContext(AuthContext);
  let navigate = useNavigate();


  const Logout=()=>{
    localStorage.removeItem("userToken");
    setUserData(null);
    toast.success("Logged out successfully!",{duration:2000,className:"text-success px-4 fw-bolder"});
    navigate("/login")
  }




  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-lg py-2 z-3 ">
  <div className="container">
    <Link to="/" className="navbar-brand text-white fs-2 me-lg-5" href="#">Noxe</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars color="white" className="fs-4"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">


   

      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      {userData && <>
        <li className="nav-item">
          <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/movies" className="nav-link">Movies</Link>
        </li>
        <li className="nav-item">
          <Link to="/tv" className="nav-link">TvShow</Link>
        </li>
        <li className="nav-item">
          <Link to="/people" className="nav-link">People</Link>
        </li>
      </>
      }   
      </ul>




      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
      <li className='nav-item d-flex align-items-center mx-lg-5 order-lg-first order-last'>
            <Link  className=" mx-lg-1 me-1 fs-5 text-dark " to="https://facebook.com" target='_blank'>
            <FaFacebook color="white"/>
            </Link>
            <Link className=" mx-lg-1 me-1 fs-5 text-dark" to="https://spotify.com" target='_blank'>
            <FaSpotify color="white"/>
            </Link>
            <Link className=" mx-lg-1 me-1 fs-5 text-dark" to="https://instagram.com" target='_blank'>
            <FaInstagram color="white"/>
            </Link>
            <Link className=" mx-lg-1 me-1 fs-5 text-dark" to="https://youtube.com" target='_blank'>
            <FaYoutube color="white"/>
            </Link>
      </li>

      {userData ? <>
        <li className="nav-item">
          <span className="nav-link cursor-pointer" onClick={Logout}>Logout</span>
        </li>
      </>
      : 
      <>
      <li className="nav-item">
          <Link to="/register" className="nav-link" >Register</Link>
      </li>

      <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
      </li>
      </>
       }

      
       

     
        
      </ul>
  
    </div>
  </div>
</nav>
  );
};

export default Navbar;
