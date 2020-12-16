import React, { useState } from "react";
import axios from "axios";
import './Home.css';


function Register() {

    const [userdata ,setUserdata] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
        showlogin: false,
        nameErr : null,
        emailErr : null,
        passwordErr : null,
        password2Err : null
    });
  
    function handleChange(event) {
      const { value,name } = event.target;
      
      setUserdata(prevuserdata => {
          return {
              ...prevuserdata,
              [name]:value
          };
      });
      // console.log(userdata);
     }


     const submitUser = async e => {
      e.preventDefault();
      setUserdata({ ...userdata});

      var newUserObject = {
        name : userdata.name,
        email : userdata.email ,
        password : userdata.password,
        password2 : userdata.password2,
      };

      try {
          await axios.post('http://localhost:5000/api/users/register', newUserObject)

          alert('Registered successfull')
          setUserdata({
            ...userdata,
            name: '',
            email: '',
            password: '',
            password2:""
          });
         
      } catch (error) {
          // console.log(error.response.data);
          alert(error.response.data.email);
      }
    };

     return (
        <div className='register'>
          {userdata.showlogin ? ( <div>Now let's try to login</div> ) : (
            <form noValidate onSubmit={submitUser}>   
              <div className="register_input">
                  {/* {userdata.nameErr ? userdata.nameErr : null} */}
                  <input onChange={handleChange} name ='name' value={userdata.name} type="text" placeholder="name" required />
                  <input onChange={handleChange} name ='email' value={userdata.email} type="email" placeholder="email" required />

                  <input onChange={handleChange} name ='password' value={userdata.password} type="password" placeholder="Password" required />
                  <input onChange={handleChange} name ='password2' value={userdata.password2} type="password" placeholder="Confirm password" required />
                  <button className='button_register' type="submit" >Register</button>
              </div>  
            </form>
          )} 
        </div>
      );
  }
  
export default Register;     