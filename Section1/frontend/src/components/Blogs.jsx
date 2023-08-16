import React, { useEffect, useState } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import LandingPage from './LandingPage';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import useUserContext from '../UserContext';
import * as Yup from 'yup'
import Zoom from 'react-reveal/Zoom';

const Blogs = () => {

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      )

const [post, setpost] = useState([])
const [post2, setpost2] = useState([])

      const fetchUserData = async () =>{
        const res = await fetch('http://localhost:5000/post/getall');
    
        console.log(res.status);
    
        if(res.status ===200){
            const data = await res.json();
            console.log(data);
            setpost(data);
            setpost2(data);
            //setsearch(data);
        }
    };
    useEffect(() => {
      fetchUserData();
    }, [post]);


    const displayPost = ()=>{
        if(post.length===0)  return <h1 className='text-center text-white '>No Data Found</h1>
        else{
            return post.map((posts) =>(
                <>
                <div className="d-flex"><img src={"http://localhost:5000/"+posts.image} alt=""   className='rounded-circle'  width={35} height={35}/>
                <div className="text-white fw-bold mx-2 fs-4">{posts.username}</div></div>
                <div className="container me-auto mt-2"> <div className='text-white'>{posts.content}</div></div>
               
                <hr className='line'/>
                </>
            )) 
        }
    }

   

    const postSchema = Yup.object().shape({
        content: Yup.string().required('Required'),
      });
    
    
    
    
    
      const postForm = useFormik({
        initialValues:{
          content: '',
          username: currentUser.name,
          image: currentUser.avatar,
    },
    onSubmit: async (values) => {
       console.log(values);
        //sending request to backend
      const res = await fetch("http://localhost:5000/post/add",
      {method:'POST',
       body:JSON.stringify(values),
       headers:{
        'Content-Type': 'application/json'
       } ,
    
      
    });
      
     console.log(res.status);
     if(res.status === 200){
      toast.success('Post Created Successfully😊')
    }
    
     
    
    } ,
    
    validationSchema:postSchema
    });
    
    
    const {LoggedIn, logout} = useUserContext();
     if(!LoggedIn)
     return<LandingPage/>






  return (
    <div className='backhome '>
        <div className="position-fixed w-100 z-2 top-0"><Navbar/></div>
       

       <div >
  <div className="container w-75 ">

   <div className="d-flex justify-content-center"><h1  style={{marginTop:'100px', fontSize:'70px'}} className='text-white '> <Zoom left cascade>Connect</Zoom></h1></div>
 
        <form action="#" method="post" onSubmit={postForm.handleSubmit}>
            <div className="form-group ">
                <p  className='error-label'>{postForm.touched.content? postForm.errors.content :''}</p>
                <textarea name="content" id="post-body" className="form-control bg-transparent line2 text-white fs-5 mt-0" type="text" autoComplete="off" onChange={postForm.handleChange} value={postForm.values.content}></textarea>
            </div>

            <button type='submit' className="btn btn-outline-info mt-4 text-white">Publish Post</button>
        </form>
    </div>
   
    
<div className="container w-75 mt-5">
 
    <div className='signupcard p-4'>{displayPost()}</div></div>
    
  </div>
    </div>
  )
}

export default Blogs