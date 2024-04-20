import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import NewClientForm from './components/Admin/NewClientForm';
import ClientsPage from './components/Admin/ClientsPage';
import Navbar from './components/Admin/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Fragment>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/clients" element={<ClientsPage/>} />
          <Route path="/new-client" element={<NewClientForm/>} />
        </Routes>
        </Fragment>
      </div>
    </Router>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

export default App;
