import React from 'react';
import { post1, post2, post3, user1, user2, user3, user4 } from '../assets/Index';
import Post from '../Cmp/Post';
const PostData = [
  { type : "✍️ Article" ,
   title : "What if famous brands had regular fonts? Meet RegulaBrands!" ,
   description :"I’ve worked in UX for the better part of a decade. F.."  ,
   image : post1 ,
   userImg : user1,
   userName : "Sarthak Kamra",
   date : null ,
   location : null ,
   views : "1.4k views",
   link : null
},
{ type : "🔬️ Education" ,
   title : "Tax Benefits for Investment under National Pension Scheme launched by Government" ,
   description :"I’ve worked in UX for the better part of a decade. F.."  ,
   image : post2 ,
   userImg : user2,
   userName : "Sarah West",
   date : null ,
   location : null ,
   views : "4.8k views",
   link : null
},
{ type : "🗓️ Meetup" ,
   title : "Finance & Investment Elite Social Mixer @Lujiazui" ,
   description :"I’ve worked in UX for the better part of a decade. F.."  ,
   image : post3,
   userImg : user3,
   userName : "Ronal Jones",
   date : "📅 Innovaccer Analytic..." ,
   location : "Noida, India" ,
   views : "800 views",
   link : "Visit Website"
},
{ type : "💼️ Job" ,
   title : "Software Developer - II" ,
   description : null  ,
   image : null,
   userImg : user4,
   userName : "Joseph Gray",
   date : "📅 Innovaccer Analytic..." ,
   location : "Noida, India" ,
   views : "1.7k views",
   link : "Apply on Timesjobs"
}
]


const Posts = () => {
  return (
    <div className="posts">
      {
        PostData.map( ( post , i ) => <Post key={i} post={post} /> )
      }
    </div>
  )
}

export default Posts