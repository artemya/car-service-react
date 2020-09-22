import ClientService from '../../services/ClientService'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CustomGet from '../../utils/CustomGET';

function ClientList() {
    const [ clients, setClient ] = useState([]);

    CustomGet(ClientService, setClient)

    return (
      <div>
         <Link to={`/api/clients/post`} className="badge badge-success">
            Create
          </Link>
          <table>
            <thead>
              <tr>
                  <td>Client name</td> 
                  <td>Phone</td> 
              </tr>
            </thead>
            <tbody>
              {clients.map(c =>(
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.phoneNumber}</td>
                    <td>
                      <Link to={`/api/clients/${c.id}/checks`} customid={c.id} className="badge badge-success">
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
export default ClientList