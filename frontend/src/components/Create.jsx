import React, { useState } from 'react'
import { useFormik} from 'formik'
import Swal from 'sweetalert2'
import { Link, useNavigate} from 'react-router-dom'

import * as Yup from 'yup';

const Create = () => {

  const navigate = useNavigate();

  const [selImage, setselImage] = useState('')

  const CreateSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    players: Yup.string().required('Required'),
    startDate: Yup.string().required('Required'),
    startMonth: Yup.string().required('Required'),
    startTime: Yup.string().required('Required'),
    link: Yup.string().required('Required'),
    platform: Yup.string().required('Required'),
  });
 
  
  const signupForm = useFormik({
    initialValues: {
      title: '',
      players: '',
      startDate: '',
      startMonth: '',
      startTime:'',
      link: '',
      platform: '',
      image:''
    },

    onSubmit: async (values) => {
      values.image= selImage;
       console.log(values);
        //sending request to backend
      const res = await fetch("https://game-quests.onrender.com/tournament/add",
      {method:'POST',
       body:JSON.stringify(values),
       headers:{
        'Content-Type': 'application/json'
       } ,

      
    });
      
     console.log(res.status);
     if(res.status === 200){
      Swal.fire({
        icon:'success',
        title: 'Signup Success',
        text: 'Now Login To Continue'
      });
    navigate('/tournament')
    }else{
      Swal.fire({
        icon:'error',
        title: 'Oops',
        text: 'Some error occured'
    });


      }

     

} ,
validationSchema : CreateSchema
  });
  const uploadFile=  async(e)=>{
    let file = e.target.files[0];
    setselImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);
    const res =await fetch ('https://game-quests.onrender.com/util/uploadfile',{
      method:'POST',
      body :fd
    });
  
    console.log(res.status);
  }
 
  return (
    <div className="d-flex justify-content-left background3 ">
 
    <div className="card my-5  p-4   text-white signupcard"  style={{width:'550px', height:'850px' , marginLeft:'90px'}}>
      <div className="card-body card-shadow-lg ">
        <h2 className="text-uppercase text-center mb-4 text-black fs-2 fw-bold">Create Tournaments</h2>
        <form onSubmit={signupForm.handleSubmit}>
          
          <label className="form-label mt-3 text-black" htmlFor="form3Example1cg">
              Title
            </label>
            <p className='error-label'>{signupForm.touched.title? signupForm.errors.title :''}</p>
            <input
              type="text"
              id="form3Example1cg"
              className="form-control"
              name="title" onChange={signupForm.handleChange} value={signupForm.values.title}
            />
           
          
          
          <label className="form-label mt-2 text-black" htmlFor="form3Example3cg">
              Players
            </label>
            <p className='error-label'>{signupForm.touched.players? signupForm.errors.players :''}</p>
            <input
              type="text"
              id="form3Example3cg"
              className="form-control "
              name="players" onChange={signupForm.handleChange} value={signupForm.values.players}
            />
           
          
         
          <label className="form-label mt-2 text-black" htmlFor="form3Example4cg">
              Start Date
            </label>
            <p className='error-label'>{signupForm.touched.startDate? signupForm.errors.startDate:''}</p>
            <input
              type="text"
              id="form3Example4cg"
              className="form-control "
              name="startDate" onChange={signupForm.handleChange} value={signupForm.values.startDate} 
            />
          <label className="form-label mt-2 text-black" htmlFor="form3Example4cg">
              Start Month
            </label>
            <p className='error-label'>{signupForm.touched.startMonth? signupForm.errors.startMonth:''}</p>
            <input
              type="text"
              id="form3Example4cg"
              className="form-control "
              name="startMonth" onChange={signupForm.handleChange} value={signupForm.values.startMonth} 
            />
          <label className="form-label mt-2 text-black" htmlFor="form3Example4cg">
              Start Time
            </label>
            <p className='error-label'>{signupForm.touched.startTime? signupForm.errors.startTime:''}</p>
            <input
              type="text"
              id="form3Example4cg"
              className="form-control "
              name="startTime" onChange={signupForm.handleChange} value={signupForm.values.startTime} 
            />
         
          <label className="form-label mt-2 text-black" htmlFor="form3Example4cg">
              Link
            </label>
            <p className='error-label'>{signupForm.touched.link? signupForm.errors.link:''}</p>
            <input
              type="text"
              id="form3Example4cg"
              className="form-control "
              name="link" onChange={signupForm.handleChange} value={signupForm.values.link} 
            />
          <label className="form-label mt-2 text-black" htmlFor="form3Example4cg">
              PLatform
            </label>
            <p className='error-label'>{signupForm.touched.platform? signupForm.errors.platform:''}</p>
            <input
              type="text"
              id="form3Example4cg"
              className="form-control "
              name="platform" onChange={signupForm.handleChange} value={signupForm.values.platform} 
            />
           <label htmlFor="" className='form-label'>Upload File</label>
          
          <input
             type="file"
             id=""
             className="form-control "
             onChange={uploadFile}/>
         
         
           
            
        
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-success  gradient-custom-4 text-body"
            >
              Register
            </button>
          </div>
          <p className="text-center text-muted mt-2 mb-0 text-white">
            Have an account?{" "}
            <Link to="/landingpage" className="fw-bold text-body text-white">
              <u>Login here</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  




    
  
  )
}

export default Create