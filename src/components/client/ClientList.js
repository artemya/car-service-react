import ClientService from '../../services/ClientService'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Client() {
    const [ clients, setClient ] = useState([]);

    useEffect(() => {
      getClient();
    }, [])
  
    const getClient = () => {
      ClientService.getAll()
        .then(respone => {
          setClient(respone.data);
          console.log(respone.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    return (
        <div>
            {clients.map(c =>(
                <p key={c.id}>{c.name} {c.phoneNumber}
                  <Link
                    to={"/api/clients/" + c.id}
                    className="badge badge-warning">
                    Show
                  </Link>
                </p>
            ))}
        </div>
    )
}
export default Client