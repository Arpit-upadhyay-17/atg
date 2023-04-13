import React, { useContext } from 'react'
import { Down, back, banner, group, info, location, user1, user2, user3, user4 } from '../assets/Index'
import Posts from './Posts';
import { loginContext } from '../Context/Context';

const Home = () => {
  const { isLoggedIn } = useContext( loginContext )
  return (
    <div className='home'>
        <div className="Banner w-100 ">
            
            <img src={banner} id='img' width="100%" alt="banner" />
             
            <div className="h-100 text-light">
                <div className="navigate">
                  <img src={ back } width="20px"  alt="back" />
                  <button className='btn btn-outline-light' >Join Group </button>
                </div>
                <div className='details' >
                    <p className='mb-0 '>Computer Engineering </p>
                    <span> 142,765 Computer Engineers follow this</span>
                </div>
            </div>
        </div>
        <article className='container' >
        <div className='filter-links ' >
              <div className="navbar navbar-expand-lg">
              <div className="container-fluid border-bottom">
                <a className="navbar-brand active" href="/"><p className='mb-0' >All Post(32)</p></a>
                <button className="navbar-toggler btn-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                Filter : All &nbsp; <img src={Down} width="13px" alt="" />
                 </button>     
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link " aria-current="page" href="#">Article</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Event</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Education</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Job</a>
                    </li>
              
                  </ul>
                  {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end "> */}
                  <div className="d-flex">
                  <button className="btn-light"  type="button" >
                  Write a Post &nbsp; <img src={Down} width="13px" alt="" />
                 </button> 
                 &nbsp;&nbsp;
                    <button className="btn-light bg-primary text-white" type="submit"> <img src={group} style={{ verticalAlign: "baseline" }} width="20px" alt="group" />&nbsp; Join Group </button>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <br />
        <div className="row "  >
          <div className="col-md-8 Pad-1">
            <Posts />
          </div>
          <div className="col-md-4 p-3">
              <form action="" className='mb-3 location-search d-flex ' >
               <img src={ location } className='align-self-center ' width="16px"  alt="location" /> <input className='py-2 border-bottom w-100' placeholder='Enter Your location' type="search" name="search" id="" />
              </form>
              <span className='d-flex' >
                <img src={info} className='align-self-start pt-2' width="15px" alt="info" />
                &nbsp;&nbsp;
                <span className='text-secondary' >
                Your location will help us serve better and extend a personalised experience.
                </span>
                </span>
                <br /><br />

                { 
                  isLoggedIn && (
                    <div className="recommand">
                      <div className="d-flex align-items-center user mb-3">
                        <span className='d-flex align-items-center w-75' >
                        <img src={ user1 } width="50px" alt="" />  
                        &nbsp;
                        <b> Activism </b>
                        </span> 
                        <span className='w-25' >
                        <button className='btn-light' > Follow </button>
                        </span>
                      </div>
                      <div className="d-flex align-items-center user mb-3">
                        <span className='d-flex align-items-center w-75' >
                        <img src={ user2 } width="50px" alt="" />  
                        &nbsp;
                        <b> Leisure </b>
                        </span> 
                        <span className='w-25' >
                        <button className='btn-light' > Follow </button>
                        </span>
                      </div>
                      <div className="d-flex align-items-center user mb-3">
                        <span className='d-flex align-items-center w-75' >
                        <img src={ user3 } width="50px" alt="" />  
                        &nbsp;
                        <b> MBA </b>
                        </span> 
                        <span className='w-25' >
                        <button className='btn-light' > Follow </button>
                        </span>
                      </div>
                      <div className="d-flex align-items-center user mb-3">
                        <span className='d-flex align-items-center w-75' >
                        <img src={ user4 } width="50px" alt="" />  
                        &nbsp;
                        <b> Philosophy </b>
                        </span> 
                        <span className='w-25' >
                        <button className='btn-light' > Follow </button>
                        </span>
                      </div>
                      <p className='text-end text-primary ' > see more  </p>
                    </div>
                  )
                }
              
              
          </div>
        </div>

        
        </article>

    </div>
  )
}

export default Home;