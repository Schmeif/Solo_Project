import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' d-flex flex-row  justify-content-between col-6 mx-auto '>
        <h1 className='bg-black text-info'>Digi Destined</h1>
        <Link className='text-decoration-none text-danger' to={`/`}>Home</Link>
        <Link className='text-decoration-none ' to={`/getDigimon`}>Your Digimon</Link>
    </div>
  )
}

export default NavBar