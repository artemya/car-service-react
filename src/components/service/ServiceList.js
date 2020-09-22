import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ServicesService from '../../services/ServicesService';
import CustomGet from '../../utils/CustomGET';

function ServiceList() {
    const [ services, setService ] = useState([]);

    CustomGet(ServicesService, setService);

    return (
      <div>
         <Link to={`/api/services/post`} className="badge badge-success">
            Create
          </Link>
          <table>
            <thead>
              <tr>
                  <td>Service name</td> 
                  <td>Price</td> 
                  <td>Category</td>
              </tr>
            </thead>
            <tbody>
              {services.map(c =>(
                <tr key={c.id}>
                  <td>{c.name}</td> 
                  <td>{c.price}</td> 
                  <td>{c.categoryId}</td>
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
export default ServiceList