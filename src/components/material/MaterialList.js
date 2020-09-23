import React, { useState } from 'react'
import { Link } from "react-router-dom";
import MaterialService from '../../services/MaterialService';
import CustomGet from '../../utils/CustomGET';
import './Material.css'

export default function MaterialList() {
    const [ materials, setMaterial ] = useState([]);

    CustomGet(MaterialService, setMaterial);

    return (
      <div className='customContainer container'>
         <Link to={`/api/materials/post`} className="btn btn-success buttonCreate">
            Add new material
          </Link>
          <table className="table tableMaterial">
            <thead>
              <tr>
                  <th>Material name</th> 
                  <th>Price</th> 
              </tr>
            </thead>
            <tbody>
              {materials.map(c =>(
                <tr key={c.id}>
                  <td>{c.name}</td> 
                  <td>{c.price} UAH</td> 
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
}
