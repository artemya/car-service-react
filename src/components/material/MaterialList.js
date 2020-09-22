import React, { useState } from 'react'
import { Link } from "react-router-dom";
import MaterialService from '../../services/MaterialService';
import CustomGet from '../../utils/CustomGET';

export default function MaterialList() {
    const [ materials, setMaterial ] = useState([]);

    CustomGet(MaterialService, setMaterial);

    return (
      <div>
         <Link to={`/api/services/post`} className="badge badge-success">
            Create
          </Link>
          <table>
            <thead>
              <tr>
                  <td>Material name</td> 
                  <td>Price</td> 
              </tr>
            </thead>
            <tbody>
              {materials.map(c =>(
                <tr key={c.id}>
                  <td>{c.name}</td> 
                  <td>{c.price}</td> 
                  <td>
                    <Link to={`/api/services/${c.id}`} className="badge badge-success" key={c.id}>
                      Show
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
}
