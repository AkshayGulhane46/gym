import React, { useState, useEffect } from 'react';
import '../../Styles/ClientsPage.scss';
import data from './data.json'; // Import the JSON data file

function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Set the clients data from the imported JSON file
    setClients(data.clients);
  }, []);

  const handleUpdate = (id) => {
    console.log(`Update client with ID: ${id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter clients based on search term
  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.address.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="clients_page">
      <div className='table_header'>
        <div className='client_headers'><h1>Clients Table</h1></div>
        <div className='search_box'>
          <input
            type="text"
            placeholder="Search by name, username, email, phone, street, or city"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Trainer Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Action</th> {/* Add a new table header for the action button */}
          </tr>
        </thead>
        <tbody>
          {filteredClients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.trainerName}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              {/* <td>{client.address.street}</td>*/}
              <td>{client.city}</td> 
              <td>
                <button onClick={() => handleUpdate(client.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsPage;
