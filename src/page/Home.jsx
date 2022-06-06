import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Caurosel from './Carousels'

function Home() {
  return (
    <div>
    <div>
     <Navbar/>
      </div>
     
       <div>
        <Caurosel/>
       </div>

       <div>
           <Footer/>
       </div>
    </div>
  )
}

export default Home
