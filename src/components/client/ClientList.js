import ClientService from '../../services/ClientService'
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CustomGet from '../../utils/CustomGET';
import './Client.css'

function ClientList() {
    const [ clients, setClient ] = useState([]);

    CustomGet(ClientService, setClient)

    return (
      <div className='customContainer container'>
         <Link to={`/api/clients/post`} className="btn btn-success buttonCreate">
            Create
          </Link>
          <table class="table tableClient">
            <thead>
              <tr>
                  <th>Client name</th> 
                  <th>Phone</th> 
                  <th></th> 
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