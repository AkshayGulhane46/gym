import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import NewClientForm from './components/Admin/NewClientForm';
import ClientsPage from './components/Admin/ClientsPage';
import Navbar from './components/Admin/Navbar';
import LoginPage from './components/Admin/LoginPage';
import Dashboard from './components/Admin/Dashboard';
import NewTrainerForm from './components/Admin/NewTrainerForm';
import TrainerTimeline from './components/Admin/TrainerTimeline';
import { Provider } from 'react-redux';


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
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/newtrainer" element={<NewTrainerForm/>} />
          <Route path="/timeline" element={<TrainerTimeline/>} />
        </Routes>
        </Fragment>
      </div>
    </Router>
  );
}


export default App;
