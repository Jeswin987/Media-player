import React from 'react'
import { Link } from 'react-router-dom'



function  Footer() {
  return (
    
      <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px'}}>
      <div className='footer-content d-flex justify-content-evenly flex-column w-100 flex-wrap'>
        <div style={{width:'400px'}} className='website'>
        <h4> Bootstrap </h4>

        <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
  
        <h6>Code licensed MIT, docs CC BY 3.0.</h6>
        <p> Currently v5.3.2 </p>   

     </div>
     <div className='d-flex flex-column' >
      <Link style={{textDecoration:'none', color:'black'}} to={'/'}>Landing page</Link>
      <Link style={{textDecoration:'none', color:'black'}} to={'/home'}>Home</Link>
      <Link style={{textDecoration:'none', color:'black'}} to={'/watch-history'}>Watch History</Link>
     </div>
     <div className='Guides d-flex flex-column'>
       <Link to={''} className='fs-2' style={{textDecoration:"none",color:"black"}} >React</Link>
       <Link to={''} className='fs-2' style={{textDecoration:"none",color:"black"}} >React Bootstrap</Link>
       <Link to={''} className='fs-2' style={{textDecoration:"none",color:"black"}}>Routing</Link>
     </div>

      </div>
      Copyright © 2023 Media Player. Built with React.

      </div>
    
  )
}

export default Footer