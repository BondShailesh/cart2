import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import styles from "../page/cart.module.css"
import { useNavigate } from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'
function Products() {
    const [poster,setPoster] = useState([]);
 
    useEffect(()=>{
        axios.get('http://localhost:8080/posters')
        .then(function (response) {
            setPoster(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },[])
  return (
    <div className={styles.productsprty} >
      {poster.map((el)=>(
         <div key={el.id} className={styles.product}  >
             <img src={el.img} alt="error" />
             <h3>{el.name}</h3>
             <h3>{el.year}</h3>
             <Link to={`/products/${el.id}`}>more details</Link>
         </div> 
      ))}
    </div>
  )
}

export default Products
