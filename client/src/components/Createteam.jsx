
import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

const Createteam = () => {
    const [generation, setGeneration] = useState('')
    const [name, setName] = useState('')
    const [img, setImg] = useState('')


    const navigate = useNavigate()
    const [errors, setErrors] = useState({})






    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/createDigimon', {
            generation,
            name,
            img,
        }).then((res)=>{
            console.log(res)
            navigate('/getDigimon')
        }).catch((err)=>{
            console.log(err)
            console.log("error is caught in front end")
            setErrors(err.response.data.errors)
        })
    }
    return (
        <div className='col-6 mx-auto bg-black'>
        <div className='col mx-auto d-flex flex-row'>
        <h2 className='text-info' >Lets choose our Digimon!</h2>
        <h5 className=' ms-5 mt-2'>
        </h5>
        </div>
    <form onSubmit={submitHandler}>
        <div className='forms bg-black'>
        <div className='formLeft'>
            <div className='form-group m-2'>
                <label className='form-label text-white'>Generation:</label>
                <input className='form-control mt-2' type="text" onChange={(e)=>setGeneration(e.target.value)}/>
                {errors.generation && <span className='text-danger m-3'>{errors.generation.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label text-white'>Digimon Name:</label>
                <input className='form-control mt-2' type="text" onChange={(e)=>setName(e.target.value)}/>
                {errors.name && <span className='text-danger m-3'>{errors.name.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label text-white'>Digimon Image:</label>
                <input className='form-control mt-2' type="text" onChange={(e)=>setImg(e.target.value)}/>
                {errors.img && <span className='text-danger m-3'>{errors.img.message}</span> }<br></br>
            </div>
        </div>
        </div>
        <button className='btn btn-primary'>Create!</button>
    </form>
    </div>
    )
}

export default Createteam