import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {


    return(
        <div className='background'>
        <div className='container mx-auto d-flex justify-content-center mt-5'>
            <div className='text-success'>
                <h1 className='bg-black'>Choose your favorite now!!</h1>
                <Link className='bg-black text-success d-flex justify-content-center ' to={`/api/createDigimon/`}> Start here!</Link>
            </div>
        </div>
    </div>
    )

}


export default Homepage;