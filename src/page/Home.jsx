import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Caurosel from './Carousels'
import Products from './Products'

function Home() {
  return (
    <div>
    {/* <div>
     <Navbar/>
      </div> */}
     
       <div>
        <Caurosel/>
       </div>
       <Products/>
       <div>
           <Footer/>
       </div>
    </div>
  )
}

export default Home
