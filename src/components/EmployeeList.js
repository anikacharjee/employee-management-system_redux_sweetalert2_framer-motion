import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEmployee } from '../redux/employeeSlice';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const EmployeeList = () => {
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will delete the employee.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteEmployee(id));
        Swal.fire('Deleted!', 'Employee has been removed.', 'success');
      }
    });
  };

  return (
    <div className="list">
      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        employees.map(emp => (
          <motion.div
            key={emp.id}
            className="card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{emp.name}</h3>
            <p>{emp.role}</p>
            <button onClick={() => handleDelete(emp.id)}>Delete</button>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default EmployeeList;