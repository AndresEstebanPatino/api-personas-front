import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = 'http://localhost:8000/api'

const ShowElement = () => {

    const [elementos, setElementos] = useState([]);

    useEffect( () => {
        getAllElements();
    }, [])

    const getAllElements = async () => {
        const response = await axios.get(`${url}/personas`);
        setElementos(response.data);
    }

    const deleteElement = async (id) => {
        await axios.delete(`${url}/personas/${id}`);
        getAllElements();
    }

  return (
    <div>
        <Link to="/create" className='btn btn-success btn-lg '> Create </Link>

        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    elementos.map( (elemento) => (
                        <tr key={elemento.id}>
                            <td>{elemento.nombre}</td>
                            <td>{elemento.email}</td>
                            <td>
                                <Link to={`/edit/${elemento.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteElement(elemento.id)} className="btn btn-danger">Delete</button>
                            </td>

                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ShowElement;