import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Editteam = () => {

    const [generation, setGeneration] = useState('')
    const [name, setName] = useState('')
    const [img, setImg] = useState('')


    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [digimon, setDigimon] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getOneDigimon/${id}`,)
        .then((res)=>{
            console.log(res)
            setGeneration(res.data.generation)
            setName(res.data.name)
            setImg(res.data.img)
            setDigimon(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [id])


        const deleteDigimon = () => {
        axios.delete(`http://localhost:8000/api/deleteDigimon/${id}`)
        .then((res)=>{
            navigate('/getDigimon')
        }).catch((err)=>{
            console.log(err)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/updateDigimon/${id}`, {
            generation,
            name,
            img,
        })
        .then((res)=>{
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
        <h1>Edit:        {digimon.name}</h1>
        <h5 className=' ms-5 mt-2'>
        </h5>
        </div>
    <form onSubmit={submitHandler}>
    <div className='forms bg-black'>
        <div className='formLeft'>
            <div className='form-group m-2'>
                <label className='form-label text-white'>Generation:</label>
                <input className='form-control mt-2' value={generation} type="text" onChange={(e)=>setGeneration(e.target.value)}/>
                {errors.generation && <span className='text-danger m-3'>{errors.generation.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label text-white'>Digimon Name:</label>
                <input className='form-control mt-2' value={name} type="text" onChange={(e)=>setName(e.target.value)}/>
                {errors.name && <span className='text-danger m-3'>{errors.name.message}</span> }<br></br>
            </div>
            <div className='form-group m-2'>
                <label className='form-label text-white'>Digimon Image:</label>
                <input className='form-control mt-2' value={img} type="text" onChange={(e)=>setImg(e.target.value)}/>
                {errors.img && <span className='text-danger m-3'>{errors.img.message}</span> }<br></br>
            </div>
        </div>
        </div>
        <button className='btn btn-primary'>Update Digimon!</button>
        <span></span>
        <button className='btn btn-danger' onClick={deleteDigimon}>Delete</button>
    </form>
    </div>
    )
}

export default Editteam