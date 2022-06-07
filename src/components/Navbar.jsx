import React, { useContext } from 'react'
import { Search2Icon} from '@chakra-ui/icons';
import { BsFillCartFill } from "react-icons/bs";
import styles from "../page/cart.module.css"
import { Context } from '../context/ContextProd';
function Navbar() {
  const { cartitem } = useContext(Context);

  return (
    <div className={styles.navbar}>
        <div className={styles.brandcat}>
         <h3 className={styles.logo}> POSTER </h3>
         <h6 className={styles.navbarItem}>HollyWood</h6>
         <h6 className={styles.navbarItem}>BollyWood</h6>
         <h6 className={styles.navbarItem}>TollyWood</h6>
        
        </div>

   

        <div className={styles.brandcat}>
        <p className={styles.signup}>Sign Up</p>
       <Search2Icon className={styles.navbarItem}/>
       <BsFillCartFill className={styles.navbarItem}/>
       <h2>{cartitem}</h2>
       </div>
    </div>
  )
}

export default Navbar
