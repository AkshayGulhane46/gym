import React, { useState, useEffect } from 'react';
import '../../Styles/ClientsPage.scss';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { selectClients } from '../../redux/clientSlice';

function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const clients = useSelector(selectClients);
  const dispatch = useDispatch(); // Define dispatch function

  const handleUpdate = (id) => {
    console.log(`Update client with ID: ${id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter clients based on search term
  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.address.street.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    console.log('Storing clients in localStorage:', clients);
    localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);
  
  useEffect(() => {
    const storedClients = JSON.parse(localStorage.getItem('clients'));
    console.log('Retrieved clients from localStorage:', storedClients);
    if (storedClients) {
      // Dispatch action to initialize clients data in Redux store
      // dispatch(initializeClients(storedClients));
      console.log('Initialized clients from localStorage in Redux store:', storedClients);
    }
  }, [dispatch]);
  

  return (
    <div className="clients_page">
      <div className="table_header">
        <div className="client_headers">
          <h1>Clients Table</h1>
        </div>
        <div className="search_box">
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
            <th>mobileNumber</th>
            <th>address</th>
            <th>feesPaid</th>
            <th>balanceAmount</th>
            <th>hasTrainer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.mobileNumber}</td>
              <td>{client.address}</td>
              <td>{client.feesPaid}</td>
              <td>{client.balanceAmount}</td>
              <td>{client.hasTrainer}</td>
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
