import React from 'react';
import axios from 'axios';

const DeleteEmployee = ({ employeeId }) => {
  const deleteEmployee = async () => {
    try {
      await axios.delete(`http://localhost:3001/employees/${employeeId}`);
      alert('Employee deleted successfully');
      // Optionally, redirect or update state after successful deletion
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Delete Employee</h2>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={deleteEmployee}>Delete</button>
    </div>
  );
};

export default DeleteEmployee;


// import React from 'react';

// const DeleteEmployee = ({ employee, onDelete, onCancel }) => {
//   return (
//     <div>
//       <h2>Delete Employee</h2>
//       <p>Are you sure you want to delete employee with ID: {employee.employeeId}?</p>
//       <button onClick={onDelete}>Confirm Delete</button>
//       <button onClick={onCancel}>Cancel</button>
//     </div>
//   );
// };

// export default DeleteEmployee;

