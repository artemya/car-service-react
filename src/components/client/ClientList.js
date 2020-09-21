import ClientService from '../../services/ClientService'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ClientAdd from './ClientAdd';

function ClientList() {
    const [ clients, setClient ] = useState([]);

    useEffect(() => {
      getAll();
    }, [])
  
    const getAll = () => {
      ClientService.getAll()
        .then(respone => {
          setClient(respone.data);
          console.log('clients',respone.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    return (
      <div>
         <Link to={`/api/clients/post`} className="badge badge-success">
            Show
          </Link>
          {clients.map(c =>(
              <p key={c.id}>{c.name} {c.phoneNumber}
                <Link to={`/api/clients/${c.id}`} className="badge badge-success" key={c.id}>
                  Show
                </Link>
              </p>
          ))}
      </div>
    )
}
export default ClientList