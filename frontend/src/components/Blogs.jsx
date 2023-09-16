import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import useUserContext from '../UserContext';
import * as Yup from 'yup'


const Blogs = () => {

  const current = new Date();
  const date = current.getDate();
  const month = current.getMonth(); //Be careful! January is 0 not 1
  const year = current.getFullYear();
  

    const [currentUser, setcurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
      )

const [post, setpost] = useState([])
const [post2, setpost2] = useState([])

      const fetchUserData = async () =>{
        const res = await fetch('https://game-quests.onrender.com/post/getall');
    
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

      post.sort((a,b) => {
        if(a.date > b.date) return -1;
        if(a.date < b.date) return 1;
        if(a.time > b.time) return -1;
        if(a.time < b.time) return 1;
        return 0;
      });



        if(post.length===0)  return <h1 className='text-center text-white '>No Data Found</h1>
        else{
            return post.map((posts) =>(
                <>
                <div className="d-flex"><img src={"https://game-quests.onrender.com/"+posts.image} alt=""   className='rounded-circle'  width={35} height={35}/>
                <div className="text-white fw-bold mx-2 fs-4">{posts.username}</div>
                <div className='mt-2 fw-lighter text-white'>on {posts.date} at {posts.time}</div></div>
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
          date: date + '/' + (month + 1) + '/' + year,
          time: current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds()
    },
    onSubmit: async (values) => {
       console.log(values);
        //sending request to backend
      const res = await fetch("https://game-quests.onrender.com/post/add",
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
    //refresh after addin
    postForm.resetForm();
    
     
    
    } ,
    
    validationSchema:postSchema
    });
    
    
    const {LoggedIn, logout} = useUserContext();
    
    if(!LoggedIn)
    return <LandingPage/>




  return (
    <div className='backhome '>
        <div className="position-fixed w-100 z-2 top-0"><Navbar/></div>
       

       <div >
  <div className="container w-75 ">

   <div className="d-flex justify-content-center"><h1  style={{marginTop:'100px', fontSize:'70px'}} className='text-white '> Connect</h1></div>
 
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