import { StylesProvider } from '@chakra-ui/react'
import React from 'react'
import styles from "../page/cart.module.css"
function Error() {
  return (
    <div>
      <img className={styles.error} src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
    </div>
  )
}

export default Error
