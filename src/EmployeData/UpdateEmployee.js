// import React, { useState} from "react";
// import { createEmployee } from './ListEmploye';
// import { useNavigate } from "react-router-dom";

// const UpdateEmployee = () => {
//   // const [Id, setId] = useState()
//   const [employeeId, setemployeeId] = useState();
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState();

//   const navigator = useNavigate();

//   const saveEmployeeData = (e) => {
//     e.preventDefault();

//     const employee = {employeeId, firstName, lastName, email};
//     console.log(employee);

//     createEmployee(employee).then((response) => {
//       console.log(response.data);
//       navigator('/employees');
//     }).catch(error => {
//       console.error("Error adding employee:", error);
//     });
//   }

//   return (
//     <div className="Container">
//     <br /> <br />
//       <div className="row">
//         <div className="Card col-md-6 offset-md-3 offset-md-3">
//           <h2 className="text-centre">Update Your Information</h2>

//           <div className="card-body">
//             <form action="">
//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="">
//                   Employee ID:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Employee Id"
//                   name="employeeId"
//                   value={employeeId}
//                   className="form-control"
//                   onChange={(e) => setemployeeId(e.target.value)}
//                 />
//               </div>
//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="">
//                   first Name:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Employee First name"
//                   name="firstName"
//                   value={firstName}
//                   className="form-control"
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="">
//                   Last name:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Employee Last name"
//                   name="lastName"
//                   value={lastName}
//                   className="form-control"
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="">
//                   Email:
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter Employee email"
//                   name="Email"
//                   value={email}
//                   className="form-control"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div type="button" className="btn btn-success" onClick={saveEmployeeData}>Submit</div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateEmployee;


// import React, { useState, useEffect } from "react";
// import { getEmployeeById, updateEmployee } from './ListEmploye';
// import { useNavigate, useParams } from "react-router-dom";
// import { createEmployee } from './ListEmploye';

// const UpdateEmployee = () => {
//   const { id } = useParams(); // Assuming you're using React Router's useParams hook to get the ID from the URL
//   const [employee, setEmployee] = useState({
//     employeeId: '',
//     firstName: '',
//     lastName: '',
//     email: ''
//   });

//   const navigator = useNavigate();

//   useEffect(() => {
//     fetchEmployeeById(id);
//   }, [id]);

//   const fetchEmployeeById = async (id) => {
//   try {
//     const response = await getEmployeeById(id);
//     setEmployee(response.data);
//   } catch (error) {
//     console.error("Error fetching employee:", error);
//   }
// };


// const saveEmployeeData = (e) => {
//   e.preventDefault();

//   const employee = { employeeId,firstName,lastName,email};

//   createEmployee(employee)
//     .then((response) => {
//       console.log("Employee added successfully:", response.data);
//       // Navigate to '/employees' after successful creation
//       navigator('/employees');
//     })
//     .catch((error) => {
//       console.error("Error adding employee:", error);
//     });
// };


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="Container">
//       <br /> <br />
//       <div className="row">
//         <div className="Card col-md-6 offset-md-3 offset-md-3">
//           <h2 className="text-centre">Update Your Information</h2>

//           <div className="card-body">
//             <form onSubmit={saveEmployeeData}>
//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="employeeId">
//                   Employee ID:
//                 </label>
//                 <input
//                   type="text"
//                   id="employeeId"
//                   name="employeeId"
//                   value={employee.employeeId}
//                   className="form-control"
//                   onChange={handleChange}
//                   disabled // assuming employeeId is not editable
//                 />
//               </div>
//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="firstName">
//                   First Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={employee.firstName}
//                   className="form-control"
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="lastName">
//                   Last Name:
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={employee.lastName}
//                   className="form-control"
//                   onChange={handleChange}
//                 />
//               </div>

//               <div className="form-group mb-2">
//                 <label className="form-label" htmlFor="email">
//                   Email:
//                 </label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   value={employee.email}
//                   className="form-control"
//                   onChange={handleChange}
//                 />
//               </div>

//               <button type="submit" className="btn btn-success">Submit</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateEmployee;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from './ListEmploye';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
    // Add more fields as needed
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const fetchedEmployee = await getEmployeeById(id);
        setEmployee(fetchedEmployee);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };

    fetchEmployee();
  }, [id]);

  const saveEmployeeData = (e) => {
    e.preventDefault();

    const updatedEmployee = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email
      // Add more fields as needed
    };

    updateEmployee(id, updatedEmployee)
      .then((response) => {
        console.log('Employee updated successfully:', response);
        // Navigate to '/employees' or any other appropriate route
        window.location.href = '/employees';
      })
      .catch((error) => {
        console.error('Error updating employee:', error);
      });
  };

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  return (
    <div className='Container'>
      <br /> <br />
      <div className='row'>
        <div className='Card col-md-6 offset-md-3 offset-md-3'>
          <h2>Update Employee</h2>
          <form onSubmit={saveEmployeeData}>
            <div className='form-group mb-2'>
              <label className='form-label'>
                Employee ID:
                <input
                  type="text"
                  name="employeeId"
                  value={id} // Display the ID from URL params
                  className='form-control'
                  disabled // Disable editing
                />
              </label>
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={employee.firstName}
                  className='form-control'
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={employee.lastName}
                  className='form-control'
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className='form-group mb-2'>
              <label className='form-label'>
                Email:
                <input
                  type="email"
                  name="email"
                  value={employee.email}
                  className='form-control'
                  onChange={handleChange}
                />
              </label>
            </div>

            <br />
            <button type="submit" onClick={saveEmployeeData} className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
