import React ,{ useState} from 'react'
import { Button } from '../Nav/Button'
//make counter
function Services() {
  const [counter , setCounter] = useState(0);

  const handleCLick = () =>{
    setCounter(counter+1);
  }
  const reset = () => {
    setCounter(0);
  }
  const decrease = () =>{
    setCounter(counter-1)
  }
  return (
    <div>
      <h1>This is a counter demonstration page </h1>
      <div>
      {counter}
      </div>
      
      <Button onClick={ handleCLick } buttonStyle='btn--outline'>increase</Button>
    
      <Button onClick={ reset } buttonStyle='btn--outline'>reset</Button>
    
      <Button onClick={ decrease } buttonStyle='btn--outline'>decrease</Button>
      <p>All the services are lsited here</p>
    </div>
  )
}

export default Services
