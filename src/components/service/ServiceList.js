import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CategoryService from '../../services/CategoryService';
import ServicesService from '../../services/ServicesService';
import CustomGet from '../../utils/CustomGET';
import './Service.css'

function ServiceList() {
    const [ services, setService ] = useState([]);
    const [ categories, setCategory ] = useState([]);

    CustomGet(ServicesService, setService);
    CustomGet(CategoryService, setCategory);

    return (
      <div className='customContainer container'>
         <Link to={`/api/services/post`} className="btn btn-success buttonCreate">
            Create
          </Link>
          <table class='table tableService'>
            <thead>
              <tr>
                  <th>Service name</th> 
                  <th>Price</th> 
                  <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {services.map(s =>(
                <tr key={s.id}>
                  <td>{s.name}</td> 
                  <td>{s.price}</td> 
                  {categories.map(c => (
                    s.categoryId == c.id
                    ?<td>{c.name}</td> : null
                  ))
                  }
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    )
}
export default ServiceList