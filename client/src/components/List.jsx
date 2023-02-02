import React from 'react';
import axios from 'axios';
import { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

const List = () => {

    const [list, setList] = useState([])
    const imgStyle = {
        height: '30vh'
    }
    useEffect (()=>{
        axios.get(`http://localhost:8000/api/getDigimon`)
        .then((res)=>{
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])



return (
    <div className=' d-flex flex-row justify-content-center col-6 mx-auto '>
        <div className='tbl'>
        <table className="table table-primary mt-3 p-2 mx-auto ">
            <thead>
                <tr>
                    <th scope='col'>Generation</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>IMG</th>
                    <th scope='col'>Options</th>
                </tr>
            </thead>
            <tbody>
                {list.map((digimon)=>{
                    return (
                        <tr className='table-primary' key={digimon._id}>
                            <td className='table-warning' >{digimon.generation}</td>
                            <td className='table-warning' >{digimon.name}</td>
                            <img src={digimon.img} style={imgStyle} className="img-fluid rounded float-left"/>
                            <td className='table-warning' >
                            <span> | </span>
                                <Link to={`/api/updateDigimon/${digimon._id}`}> edit</Link>
                            <span> | </span>
                            </td>
                        </tr>
                )
            })
        }
        </tbody>
    </table>
    </div>
    </div>
)
    
}

export default List;