import { useContext } from "react";
import { Down, logo, search , user4 } from "../assets/Index";
import Modal from "./Modal";
import { loginContext } from "../Context/Context";
const Navbar = () => {
    const { isLoggedIn } = useContext( loginContext )
  return (
    <div className="container nav-bar">
        <nav className='row p-2 align-items-center ' >
        <div className='col-md-4' >
            <img src={ logo } width="120px"  alt="logo" />
        </div>
        <div className='col-md-4' >
            <form  className="d-flex align-items-center border p-2 nav-form" > 
                <label htmlFor="search"  className="align-self-center px-2"  > <img src={search} width="18px"  alt="search-icon" />  </label>
                &nbsp;&nbsp;
                <input  type="text" id="search"  placeholder="Search for your favorite groups in ATG" />
            </form>
        </div>
        <div className='col-md-4 d-flex justify-content-end' >
            <p className="mb-0 d-flex align-items-center" >
                                                  
                 <b className="btn align-self-center text-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                      {
                        isLoggedIn ? (
                            <span className='d-flex align-items-center w-75' >
                        <img src={ user4 } width="50px" alt="" />  
                        &nbsp;
                        <span className="text-dark" > Philosophy </span>
                        </span>

                        ):(
                            <> Create Account &nbsp; 
                                It's Free &nbsp;
                      <img  src={Down} width="10px"  />
                            </>
                        )
                      } 
                 </b> 
            </p>
        </div>
    </nav>
    <Modal />
    </div>
  )
}

export default Navbar;