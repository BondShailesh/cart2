import React from 'react'
import styles from "../page/cart.module.css"
import { BsInstagram , BsFacebook , BsTwitter , BsSnapchat} from "react-icons/bs";
function Footer() {
  return (
    <div className={styles.footer}>
      <div >
         <h3>About Us</h3>
        <p>  Careers </p> 
         <p>     Press Releases</p> 
        <p>      POSTER Cares</p> 
         <p>      Gift a Smile</p> 
        <p>      POSTER Science</p>
         <div className={styles.socialmediaIcon}>
         <BsInstagram/>
         <BsFacebook/>
         <BsTwitter/>
         <BsSnapchat/>
         </div>
      </div>

      <div>
      <h3>About Us</h3>
        <p> Contact Us </p> 
         <p>     Press Releases</p> 
        <p>      POSTER Cares</p> 
         <p>      Gift a Smile</p> 
        <p>      POSTER Science</p>
      </div>
       
      <div>
      <h3>About Us</h3>
        <p>  Careers </p> 
         <p>    FAQ </p> 
        <p>      POSTER Cares</p> 
         <p>      Gift a Smile</p> 
        <p>      POSTER Science</p>
      </div>
     
    </div>
  )
}

export default Footer
