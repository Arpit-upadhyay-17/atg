import React, { useContext } from 'react'

import { Facbook, Google, vector } from '../assets/Index';
import { loginContext } from '../Context/Context';

const Modal = () => {
    const { tryLogin , setTryLogin , isLoggedIn , setIsLoggedIn } = useContext( loginContext )

    const handleClick = () => {
        if( tryLogin ){
            return setTryLogin(false)
        }else{
            return setTryLogin(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        return setIsLoggedIn(true)
    }


  return (
    <div className="modal fade rounded" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <p className='mb-0 text-success p-2' style={{ background : "#EFFFF4" }} >Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
            <h1 className='mx-3 mb-3' >
            { !tryLogin ? <>Create Account</> : <>Sign In</>  }
            </h1>
          <div className='row' >
            <div className="form col-md-6 ">
                <form className='w-100' onSubmit={handleSubmit}  >
                    {

                        tryLogin ? null : (
                            <span className='d-flex'>
                    <input type="text" className='w-50 p-2' name="name" placeholder='First Name' id="" />
                    <input type="text" name="name" className='w-50 p-2' placeholder='Last Name' id="" />
                    </span>
                        )
                    }
        
                    <input type="text" className='w-100 p-2' name="name" placeholder='email' id="" /> <br />
                    <input type="password" className='w-100 p-2' name="name" placeholder='Password' id="" />
                    
                    { 
                     tryLogin ? null : (
                        <input type="password" className='w-100 p-2' name="name" placeholder='Confirm Password' id="" />
                     )
                     }
                    <br /> <br />
                    <button className='btn btn-primary w-100 ' type='submit' style={{ borderRadius : "50px" }} data-bs-dismiss="modal" aria-label="Close"  >
                            { tryLogin ?<> Sign In</> : <>Create Account</> }
                    </button>
                    <br />
                   <br />
                   <center className='p-2 border w-100 text-center' >
                   <img src={Google}  width="50%" alt="" />
                   </center>
                   <br />
                   <center className='p-2 border w-100 text-center' >
                    <img src={Facbook} width="50%" alt="" />
                   </center>
                </form>
            </div>
            <div className='col-md-6' >
                <div className='text-end' >
                    { tryLogin ? (
                    <>
                    Don't have an Account ? <span className='text-primary mb-0' style={{ cursor : "pointer" }} onClick={handleClick} > Create New Account </span>
                    </>
                    ): (
                        <>
                        Already have account ? try <span style={{ cursor : "pointer" }} className='text-primary mb-0' onClick={handleClick} > Signin </span>
                        </>
                    )  }    
                </div>.
                <img src={ vector } className='img-fluid' width="100%"  alt="" />
            </div>
          </div>
        </div>
        {/* <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div> */}
      </div>
    </div>
  </div>

  )
}

export default Modal;