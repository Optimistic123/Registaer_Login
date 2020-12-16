import React , { useState } from 'react'
import { Button } from '../Button';
import './Home.css'
import Login from './Login';
import Register from './Register';


function Home() {

  const [loginstage,setLoginstage] = useState('true');
  const [registerstage,setRegisterstage] = useState('false');

  const handleLogin = () => {
    setLoginstage(!registerstage);
    console.log(loginstage);
  }

  const handleRegister = () => {
    setRegisterstage(!registerstage);
    console.log(loginstage);
  }

  return (

    <div className='home'>
      <div className='home_Upperdiv'>
        <Button onClick={handleRegister} buttonStyle='btn--outline'>Login</Button>
        <button style={{visibility: 'hidden'}}>jsdfj</button>
        <Button onClick={handleRegister} buttonStyle='btn--outline'>Register</Button>
      </div>
      { registerstage ? (
          <div className='home_Lowerdiv'>
              <img className='register_Img' src="images/undraw_team_up_ip2x.svg" alt="image" />
              <Register />
          </div>
       )
       :
       (
          <div className='home_Lowerdiv1'>
            <img className='login_Img' src="images/undraw_team_up_ip2x.svg" alt="image" />
            <Login />
          </div>
       )
      }
    </div>
  )
}

export default Home




