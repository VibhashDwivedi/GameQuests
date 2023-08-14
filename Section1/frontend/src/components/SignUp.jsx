import React, { useState } from 'react'
import { useFormik} from 'formik'
import Swal from 'sweetalert2'
import {useNavigate, Link} from 'react-router-dom'

import * as Yup from 'yup';
import Header from './Header';

const SignUp = () => {

  const navigate = useNavigate();

  const [selImage, setselImage] = useState('')

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(7,'Too Short!').required('Required'),
    
  });
 
  
  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      
    },

    onSubmit: async (values) => {
      values.avatar= selImage;
       console.log(values);
        //sending request to backend
      const res = await fetch("http://localhost:5000/user/add",
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
      navigate('/landingpage');
    }else{
      Swal.fire({
        icon:'error',
        title: 'Oops',
        text: 'Some error occured'
    });


      }

     

} ,
validationSchema : SignupSchema
  });
  const uploadFile=  async(e)=>{
    let file = e.target.files[0];
    setselImage(file.name);
    const fd = new FormData();
    fd.append('myfile', file);
    const res =await fetch ('http://localhost:5000/util/uploadfile',{
      method:'POST',
      body :fd
    });
  
    console.log(res.status);
  }
 
  return (<>
  
    <div className=" background2 ">
    <Header/>
    <div className='d-flex justify-content-left'>
    <div className="card mt-4  p-3 py-2   text-white signupcard"  style={{width:'550px', height:'520px' , marginLeft:'90px'}}>
      <div className="card-body card-shadow-lg ">
        <h2 className="text-uppercase text-center my-2 text-white fs-1 fw-bold edit-title2">Register your account</h2>
        <form onSubmit={signupForm.handleSubmit} >
          
          <label className="form-label mt-3 " htmlFor="form3Example1cg">
              Your Name
            </label>
            <p className='error-label'>{signupForm.touched.name? signupForm.errors.name :''}</p>
            <input
              type="text"
              id="form3Example1cg"
              className="form-control"
              name="name" onChange={signupForm.handleChange} value={signupForm.values.name}
            />
           
          
          
          <label className="form-label mt-2 " htmlFor="form3Example3cg">
              Your Email
            </label>
            <p className='error-label'>{signupForm.touched.email? signupForm.errors.email :''}</p>
            <input
              type="email"
              id="form3Example3cg"
              className="form-control "
              name="email" onChange={signupForm.handleChange} value={signupForm.values.email}
            />
           
          
         
          <label className="form-label mt-2 " htmlFor="form3Example4cg">
              Password
            </label>
            <p className='error-label'>{signupForm.touched.password? signupForm.errors.password:''}</p>
            <input
              type="password"
              id="form3Example4cg"
              className="form-control "
              name="password" onChange={signupForm.handleChange} value={signupForm.values.password} 
            />
           <label htmlFor="" className='form-label'>Profile Pic</label>
           
          <input
             type="file"
             id=""
             className="form-control "
             onChange={uploadFile}/>
         
         
           
            
        
          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn btn-primary w-50 line2 text-white"
            >
              Register
            </button>
          </div>
          <p className="text-center  mt-2 mb-0 text-white">
            Have an account?{" "}
            <Link to="/landingpage" className="fw-bold  text-white">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  </div>
  
  </>



    
  
  )
}

export default SignUp