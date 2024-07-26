import React, { useState} from "react";
import { createEmployee } from './ListEmploye';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  // const [Id, setId] = useState()
  const [employeeId, setemployeeId] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const navigator = useNavigate();

    const saveEmployeeData = (e) => {
    e.preventDefault();

    const employee = { employeeId, firstName, lastName, email };
    console.log(employee);

    createEmployee(employee).then((response) => {
      console.log(response.data);
      navigator('/employees');
    }).catch(error => {
      console.error("Error adding employee:", error);
    });
  }

  return (
    <div className="Container">
    <br /> <br />
      <div className="row">
        <div className="Card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-centre">Add Employee</h2>

          <div className="card-body">
            <form action="">
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">
                  Employee ID:
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee Id"
                  name="employeeId"
                  value={employeeId}
                  className="form-control"
                  onChange={(e) => setemployeeId(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">
                  first Name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee First name"
                  name="firstName"
                  value={firstName}
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">
                  Last name:
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee Last name"
                  name="lastName"
                  value={lastName}
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group mb-2">
                <label className="form-label" htmlFor="">
                  Email:
                </label>
                <input
                  type="text"
                  placeholder="Enter Employee email"
                  name="Email"
                  value={email}
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div type="button" className="btn btn-success" onClick={saveEmployeeData}>Submit</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

