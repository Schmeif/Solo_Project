import React, {useState, useEffect} from 'react'
import List from '../components/List'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Main = () => {
    const [digimon, setDigimon] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/getDigimon')
        .then((res)=>{
            console.log(res.data)
            setDigimon(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    
    
    return (
        <div>
            <div className='col-2  mx-auto d-flex flex-column '>
        <h2 className='bg-black text-info mt-3 d-flex justify-content-center'>~Favorites~</h2>
        <h5 className='d-flex bg-black d-flex justify-content-center' >
        <Link  to={`/api/createDigimon/`}>add a digimon</Link>
        </h5>
            </div>
            <List digimon={digimon} setDigimon={setDigimon} />
        </div>
    )
}

export default Main;