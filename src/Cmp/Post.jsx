import React, { useState } from 'react'
import { Dot, eye, post1, share, user1 } from '../assets/Index'

const Post = ({post}) => {
    const [ isClick , setIsClick ] = useState( false )


    const handleClickOnDotButton = () => {
        console.log("clciked");
        if(isClick){
            return setIsClick(false)
        }else{
            return setIsClick(true)
        }
    }
  return (
    <div className='post border rounded mb-3'>
        { post.image && <img src={post.image } width="100%" alt="post1" /> }
        <br />
        <div className='p-3' style={{ position : "relative" }} >
        <span className='mb-2' > 
        {post.type}
        </span>
        <div className="title d-flex align-items-center w-100">
            <h5 className="title-text w-75 mb-2">
               {post.title}
            </h5>
           <span className='w-25 d-flex justify-content-end'  >
           <button onClick={handleClickOnDotButton} className='btn-light' style={{ width : "50px" }} >   <img src={ Dot }  width="25px" alt="Dot" /> </button>
           </span>
        </div>
            { post.date && (
                <span> {post.date} </span>
            ) }
            &nbsp;&nbsp;&nbsp;&nbsp;
            { post.location && (
                <span> {post.location} </span>
            ) }
            { post.description && (
                <p className=' text-secondary'>
                { post.description } 
            </p>
            ) }
            
            { post.link && (
                <button className='w-100 my-2 btn btn-outline-warning text-center '  >
                { post.link } 
            </button>
            ) }
            <div className="user-post-details d-flex align-items-center">
                <span className='d-flex align-items-center w-50' >
                    <img src={ post.userImg } width="50px" alt="user1" />
                    &nbsp;
                    <span  style={{ display : 'inline-block' }} >
                    <b style={{ display : 'block' }} > { post.userName } </b> 
                    <span className='text-secondary show-view' > 
                        <img src={eye} width="15px" alt="eye" />&nbsp; { post.views }
                    </span>
                    </span>
                </span>
                <span className='d-flex align-items-center justify-content-end w-50' >
                    <span className='text-secondary hide-view' > 
                        <img src={eye} width="15px" alt="eye" />&nbsp; { post.views }
                    </span>&nbsp;
                    <button className='btn-light' style={{ width :"50px" }} >
                        <img src={share} width="20px" alt="share" />
                    </button>
                </span>
            </div>

            {
                isClick && (
                    <div  className="p-3 something">
                <p> One </p>
                <p> Two </p>
                <p> Three </p>
            </div>
                )
            }

        
        </div>
    </div>
  )
}

export default Post