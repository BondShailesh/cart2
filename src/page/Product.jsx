import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import styles from "../page/cart.module.css"
import { Context } from '../context/ContextProd';
function Product() {
    const {id} = useParams();
    const [product,setProduct] = useState({})
    const { cartitem , handleCartnum } = useContext(Context)
    // console.log(id);
    useEffect(()=>{
        axios.get(`http://localhost:8080/posters/${id}`)
        .then(function (response) {
            setProduct(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    },[]);

    const handlecart = ()=>{
      handleCartnum()
    }
  return (
    <div className={styles.singleproduct}>
      <img className={styles.imgsingleproduct} src={product.img} alt="" />
      <h3>{product.name}</h3>
      <p>{product.actor}</p>
      <p>{product.year}</p>
      <button onClick={handlecart}>add to cart</button>
    </div>
  )
}

export default Product
