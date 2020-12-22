import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Button } from '../Nav/Button'


function Products() {

  const [data,setData] =useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=df7f7e19fa508c16271454c130cd7d39&with_genres=99`);;
      // console.log(response);
      setData(response.data.results);
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* {data.map(indData =>{
        <p>{indData.}</p>
      })} */}
     <Button onClick={fetchData}>fetchData</Button>
    </div>
  )
}

export default Products
