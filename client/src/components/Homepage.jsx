import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {


    return(
        <div className='background'>
        <div className='container mx-auto d-flex justify-content-center mt-5'>
            <div className='text-success'>
                <h1 className='heading'>Choose your favorite now!!</h1>
                <Link className='bigbutton mx-auto ' to={`/api/createDigimon/`}> Start here!</Link>
            </div>
        </div>
    </div>
    )

}


export default Homepage;