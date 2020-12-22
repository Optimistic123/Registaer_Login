import React, { useState } from "react";
import axios from "axios";
import './login.css'
import { Button } from '../Nav/Button';

function Login(props) {

    const [logindata,setLogindata] = useState({
        email: "",
        password: "",
        success:'',
        error:''
      });
    
    const { email, password ,success, error} = logindata;

    function handleChange(event) {
      const { name, value } = event.target;
      
      setLogindata(prevlogidata => {
          return {...prevlogidata, [name]:value, suucess:'', error:''};
      });
     }

     const submitlogindata = async e => {

        e.preventDefault();
        setLogindata({ ...logindata });


      try {
          const response =  await axios.post('http://localhost:5000/api/users/login', {email, password} )
          setLogindata({...logindata,name: '',email: '',password: '',success:response.data.message});
         
      } catch (error) {
        // console.log(error.response);
        setLogindata({...logindata, error: error.response.data.error });
          
      }
      };


    return (
      <div className='login'>
        <div className='login_img'>
            <img className='register_Img' src="images/undraw_team_up_ip2x.svg" alt="image" />
        </div>
        <form noValidate onSubmit={submitlogindata}>   
           
          <div className='login_input'>
            {success && `${success}`}
            {error && `${error}`}
            <input onChange={handleChange} name='email' value={logindata.email} placeholder="email" id="email"  type="email" />
            <input onChange={handleChange} name='password' value={logindata.password} placeholder="Password" id="password" type="password" />
            <Button buttonStyle='btn--outline'>Login</Button>
          </div>  
        </form>
    </div>
  );
}

export default Login;

