import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useUserContext from '../UserContext';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import LandingPage from './LandingPage';
import Navbar from './Navbar';

const EditUser = () => {
    const navigate = useNavigate();
    const {LoggedIn} = useUserContext();

    const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem("user"))
    );

    const [selImage, setselImage] = useState(currentUser.avatar)
    const fetchUserData = async () => {
        const res = await fetch("http://localhost:5000/user/getbyid/"+currentUser._id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
    };

    useEffect(()=>{
        fetchUserData();
    }, [currentUser]);
   
    
  
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
        name: currentUser.name,
        email: currentUser.email,
        password: currentUser.password,
        avatar: currentUser.avatar
      },
  
      onSubmit: async (values) => {
        values.avatar= selImage;
         console.log(values);
          //sending request to backend
        const res = await fetch("http://localhost:5000/user/update/"+currentUser._id,
        {method:'PUT',
         body:JSON.stringify(values),
         headers:{
          'Content-Type': 'application/json'
         } ,
  
        
      });
        
       console.log(res.status);
       if(res.status === 200){
        Swal.fire({
          icon:'success',
          title: 'Update Successful',
        });
      
        
      const data = await res.json();
      //setcurrentUser(data)
      sessionStorage.setItem('user',JSON.stringify(data));

      navigate('/home');
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
        if(file.name==='')
        setselImage(currentUser.avatar)
        else
        setselImage(file.name);
        const fd = new FormData();
        fd.append('myfile', file);
        const res =await fetch ('http://localhost:5000/util/uploadfile',{
          method:'PUT',
          body :fd
        });
      
        console.log(res.status);
      }

   
   
      

    
   
    return (
        <div className='backhome2'>
        <div style={{position:'fixed'}} className='w-100'><Navbar /></div>
      <div className="d-flex align-items-center justify-content-center">
   
      <div className="card  p-5 py-4    text-white editcard"  style={{width:'550px', height:'530px' , marginLeft:'90px', marginTop:'90px'}}>
        <div className="card-body card-shadow-lg ">
          <h2 className="text-uppercase text-center mb-3 edit-title text-black fs-1 fw-bold">Update Details</h2>
          <form onSubmit={signupForm.handleSubmit}>
            
            <label className="form-label mt-3 text-black" htmlFor="form3Example1cg">
                Your Name
              </label>
              <p className='error-label'>{signupForm.touched.name? signupForm.errors.name :''}</p>
              <input
                type="text"
                id="form3Example1cg"
                className="form-control"
                name="name" onChange={signupForm.handleChange} value={signupForm.values.name}
              />
             
            
            
            <label className="form-label mt-2 text-black" htmlFor="form3Example3cg">
                Your Email
              </label>
              <p className='error-label'>{signupForm.touched.email? signupForm.errors.email :''}</p>
              <input
                type="email"
                id="form3Example3cg"
                className="form-control "
                name="email" onChange={signupForm.handleChange} value={signupForm.values.email}
              />
             
            
           
            <label className="form-label mt-2 text-black" htmlFor="form3Example4cg">
                Password
              </label>
              <p className='error-label'>{signupForm.touched.password? signupForm.errors.password:''}</p>
              <input
                type="password"
                id="form3Example4cg"
                className="form-control "
                name="password" onChange={signupForm.handleChange} value={signupForm.values.password} 
              />
             <label htmlFor="" className='form-label text-black mt-2'>Profile Pic</label>
             <input
             type="file"
             id=""
             className="form-control "
             onChange={uploadFile}/>
         
             
              
          
            <div className="d-flex justify-content-center mt-4">
              <button
                type="submit"
                className="btn btn-primary w-50 line2 text-white "
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    )
}

export default EditUser