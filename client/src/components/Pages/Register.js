import React, { useState } from "react";
import axios from "axios";
import './register.css'

function Register() {

    const [userdata ,setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        success:'',
        error:''
    });

    const { name, email, password,password2 ,success,error} = userdata;

  
    function handleChange(event) {
      const { value,name } = event.target;
      
      setUserdata(userdata => {
          return {...userdata,[name]:value, success:'', error:'' };
      });
     }


     const submitUser = async e => {
      e.preventDefault();
      setUserdata({ ...userdata});

      try {
          const response =  await axios.post('http://localhost:5000/api/users/register', {name, email, password,password2} )
          // console.log(response);
          setUserdata({...userdata, name: '', email: '',  password: '', password2:"", success:response.data.message});
         
      } catch (error) {
        // console.log(error.response);
        setUserdata({...userdata, error: error.response.data.error });
          
      }
    };

     return (
        <div className='register'>
            <div className='register_img' >
              <img src="images/undraw_team_up_ip2x.svg" alt="image" />
            </div>
            <form noValidate onSubmit={submitUser}>   
              <div className='register_input'>
                  {success && `${success}`}
                  {error && `${error}`}
                  <input onChange={handleChange} name ='name' value={name} type="text" placeholder="name" required />
                  <input onChange={handleChange} name ='email' value={email} type="email" placeholder="email" required />
                  <input onChange={handleChange} name ='password' value={password} type="password" placeholder="Password" required />
                  <input onChange={handleChange} name ='password2' value={password2} type="password" placeholder="Confirm password" required />
                  <button className='button_register' type="submit" >Register</button>
              </div>  
            </form>
        </div>
      );
  }
  
export default Register;     