import React from 'react'
import Header from './Header'
import '../css/createpost.css'
import { useFormik} from 'formik'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import useUserContext from '../UserContext'


const LandingPage = () => {

  const{setLoggedIn} = useUserContext();
    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
        email: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
        password: Yup.string().required('Required'),
      });


      const loginForm = useFormik({
        initialValues:{
            email: '',
          password: ''
    },
    onSubmit : async (values) => {
      console.log(values);
      
      //submit values to backend
      const res = await fetch("http://localhost:5000/user/authenticate",
      {method:'POST',
       body:JSON.stringify(values),
       headers:{
        'Content-Type': 'application/json'
       } ,
  
      
    });
    
    console.log(res.status);
    if(res.status === 200){
      Swal.fire({
        icon: 'success',
        title:'Login Successful'
      })
      navigate('/home');

      const data = await res.json();
      sessionStorage.setItem('user',JSON.stringify(data));
      console.log(data);
      setLoggedIn(true);


    }else if(res.status === 401){
      Swal.fire('Invalid Credentials','Please check your credentials and try again.','warning')
    }
    else{
      Swal.fire({
        icon:'error',
        title: 'Oops',
        text: 'Some error occured'
    });
    }
    
    
    },
      validationSchema: loginSchema
});





  return (
    <div>
  
    <div className=' background'>
    <Header/>
    <div className='d-flex justify-content-center mt-5'>
<div className="text-center mx-5 w-50  ">
   
            <h1 className='head1'>Find Your Game Tournaments Here!!</h1>
            <h4 className='fw-light m-4 mx-5 text-light px-5' > Multiple tournaments and events waiting for you to join in!!!!!</h4>
            <form action=""   onSubmit={loginForm.handleSubmit}>
                
                    <input type="email" className=' w-50 p-1' placeholder='Your Email' name="email" onChange={loginForm.handleChange}
              value={loginForm.values.email}/>
                    <input type="password" className='mx-1 w-50 mt-2 p-1' placeholder='Password here' autoComplete='off'
                    name='password'  onChange={loginForm.handleChange}
                    value={loginForm.values.password}/>
                  
                    <button type='submit' className='btn btn-primary mt-3 w-50 fw-bold'>Log In</button>
               
            </form >

            <h4 className='fw-light m-4 mb-2 fw-bold text-light'> New Here?</h4>
           <Link to='/signup'> <button className='btn btn-primary mt-2 w-50 fw-bold '>Get Started</button></Link>
            </div>
            </div>
        </div>


       
        </div>


     
     

    
  )
}

export default LandingPage