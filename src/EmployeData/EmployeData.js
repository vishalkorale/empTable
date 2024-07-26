// // EmployeData.js
// import React, { useEffect, useState } from "react";
// import { ListEmploye } from "./ListEmploye";
// import { useNavigate } from "react-router-dom";

// const EmployeData = () => {
//   const [employees, setEmployees] = useState([]);

//   const navigator = useNavigate();

//   useEffect(() => {
//     ListEmploye()
//       .then((response) => {
//         console.log(response.data);
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching employees:", error);
//       });
//   }, []);

//   const addNewEmployee = () => {
//     navigator("./add-employee");
//   };

//   const updateEmployee = () => {
//     navigator("/employees/:id/update");
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "gray",
//         width: "100%",
//         height: "100vh auto",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <h1>Employee Data</h1>
//       <button
//         type="button"
//         className="add-employee btn btn-primary"
//         style={{ marginTop: "10px", marginBottom: "10px" }}
//         onClick={addNewEmployee}
//       >
//         Add Employee
//       </button>
//       <table
//         class="table table-dark table-bordered"
//         style={{ width: "1000px" }}
//       >
//         <thead>
//           <tr>
//             <th>Employee Id</th>
//             <th>Employee Firstname</th>
//             <th>Employee Lastname</th>
//             <th>Employee Email</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.employeeId}>
//               <td>{employee.employeeId}</td>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.email}</td>
//               <td>
//                 <button
//                   type="button"
//                   className="add-employee btn btn-primary"
//                   onClick={updateEmployee}
//                 >
//                   Update
//                 </button>
//               </td>
//               <td>
//                 <button type="button" className="add-employee btn btn-primary">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeData;


// import React, { useEffect, useState } from "react";
// import { ListEmploye } from "./ListEmploye";
// import { useNavigate } from "react-router-dom";

// const EmployeData = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigator = useNavigate();

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await ListEmploye();
//       setEmployees(response.data);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   };

//   const addNewEmployee = () => {
//     navigator("/add-employee");
//   };

//   const updateEmployee = (employeeId) => {
//     navigator(`/employees/${employeeId}/update`);
//   };

//   const deleteEmployee = (employeeId) => {
//     // Implement delete functionality here
//     console.log(`Deleting employee with ID: ${employeeId}`);
//     // Make API call to delete the employee
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "gray",
//         width: "100%",
//         height: "100vh auto",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <h1>Employee Data</h1>
//       <button
//         type="button"
//         className="btn btn-primary"
//         style={{ marginTop: "10px", marginBottom: "10px" }}
//         onClick={addNewEmployee}
//       >
//         Add Employee
//       </button>
//       <table className="table table-dark table-bordered" style={{ width: "1000px" }}>
//         <thead>
//           <tr>
//             <th>Employee Id</th>
//             <th>Employee First Name</th>
//             <th>Employee Last Name</th>
//             <th>Employee Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map((employee) => (
//             <tr key={employee.employeeId}>
//               <td>{employee.employeeId}</td>
//               <td>{employee.firstName}</td>
//               <td>{employee.lastName}</td>
//               <td>{employee.email}</td>
//               <td>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={() => updateEmployee(employee.employeeId)}
//                 >
//                   Update
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger ms-2"
//                   onClick={() => deleteEmployee(employee.employeeId)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EmployeData;

import React, { useEffect, useState } from "react";
import { deleteEmployee, ListEmploye } from "./ListEmploye";
import { useNavigate } from "react-router-dom";

const EmployeData = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await ListEmploye();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const addNewEmployee = () => {
    navigator("/add-employee");
  };

  const updateEmployee = (id) => {
    navigator(`/employees/${id}/update`);
  };

  const handleDelete = async (employeeId) => {
    try {
      await deleteEmployee(employeeId);
      // After successful deletion, update the list of employees
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        width: "100%",
        height: "100vh auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Employee Data</h1>
      <button
        type="button"
        className="add-employee btn btn-primary"
        style={{ marginTop: "10px", marginBottom: "10px" }}
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
      <table className="table table-dark table-bordered" style={{ width: "1000px" }}>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Firstname</th>
            <th>Employee Lastname</th>
            <th>Employee Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.employeeId}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  type="button"
                  className="add-employee btn btn-primary"
                  onClick={() => updateEmployee(employee.employeeId)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="add-employee btn btn-primary"
                  onClick={() => handleDelete(employee.employeeId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeData;
