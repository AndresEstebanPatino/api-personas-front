import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const url = 'http://localhost:8000/api/personas'

const Create = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {nombre : nombre, email : email})
       navigate('/')
    }

  return (
    <div>
        <h3>Create</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'> nombre </label>
                <input 
                value={nombre} 
                onChange={(e)=> setNombre(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> email </label>
                <input 
                value={email} 
                onChange={(e)=> setEmail(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Store</button>
        </form>
    </div>
  )
}

export default Create;