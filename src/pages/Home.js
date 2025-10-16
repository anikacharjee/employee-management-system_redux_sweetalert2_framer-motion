import React from 'react';
import EmployeeList from '../components/EmployeeList';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Employee Management</h1>
    <Link to="/add"><button>Add Employee</button></Link>
    <EmployeeList />
  </div>
);

export default Home;