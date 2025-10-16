import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !role) {
      Swal.fire('Error', 'Please fill all fields', 'error');
      return;
    }

    dispatch(addEmployee({ id: Date.now(), name, role }));
    Swal.fire('Success', 'Employee added!', 'success');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
