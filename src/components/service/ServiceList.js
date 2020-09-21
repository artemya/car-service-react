import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ServicesService from '../../services/ServicesService';

function ServiceList() {
    const [ services, setService ] = useState([]);

    useEffect(() => {
      getAll();
    }, [])
  
    const getAll = () => {
      ServicesService.getAll()
        .then(respone => {
          setService(respone.data);
          console.log('clients',respone.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    return (
      <div>
         <Link to={`/api/services/post`} className="badge badge-success">
            Create
          </Link>
          {services.map(c =>(
              <p key={c.id}>{c.name} {c.phoneNumber}
                <Link to={`/api/services/${c.id}`} className="badge badge-success" key={c.id}>
                  Show
                </Link>
              </p>
          ))}
      </div>
    )
}
export default ServiceList