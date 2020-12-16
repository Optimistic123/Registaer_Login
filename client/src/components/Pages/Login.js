import React, { useState } from "react";
import axios from "axios";
import './Home.css'

function Login(props) {

    const [logindata,setLogindata] = useState({
        email: "",
        password: "",
        errors: {}
      });

    function handleChange(event) {
      const { name, value } = event.target;
      
      setLogindata(prevlogidata => {
          return {
              ...prevlogidata,
              [name]:value
          };
      });
      console.log(logindata);
     }

     const submitlogindata = async e => {

        e.preventDefault();
        setLogindata({ ...logindata });


        try {
            await axios.post('/api/users/login',logindata);
            
            alert('You have successufully loggedin');
            
            setLogindata({
                ...logindata,
                email: "",
                password: "",
            });
        } catch (error) {
          alert('email or password is wrong')
        }
      };


    return (
      <div className='login'>

        <form noValidate onSubmit={submitlogindata}>   
          <div className="login_input">
            <input style={{marginBottom:'10px',marginRight:'10px'}} onChange={handleChange} name='email' value={logindata.email} placeholder="email" id="email"  type="email" />
            <input style={{marginBottom:'10px'}} onChange={handleChange} name='password' value={logindata.password} placeholder="Password" id="password" type="password" />
            <button className='button_login'
                // style={{ height:'40px',width:'130px',borderRadius:'0.5rem', 
                //         backgroundColor:'green',fontSize:'13px',fontWeight:'900',color:'white'
                //         ,border: 'none',outline:'none',marginLeft:'160px'}}
                type="submit"         
              >login
            </button>
          </div>  
        </form>
    </div>
  );
}

export default Login;

