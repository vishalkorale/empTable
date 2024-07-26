// import axios from "axios";

// const API_BASE_URL = "http://localhost:3001/employees";

// export const ListEmploye = () => axios.get(API_BASE_URL);

// export const createEmployee = (employee) => axios.post(API_BASE_URL, employee);

// import axios from 'axios';

// const API_BASE_URL = "http://localhost:3001/employees";

// export const ListEmploye = () => axios.get(API_BASE_URL);

// export const createEmployee = (employee) => axios.post(API_BASE_URL, employee);

// import axios from 'axios';

// const API_BASE_URL = "http://localhost:3001/employees";

// export const ListEmploye = () => axios.get(API_BASE_URL);

// export const createEmployee = (employee) => axios.post(API_BASE_URL, employee);

// export const getEmployeeById = (id) => axios.get(`${API_BASE_URL}/${id}`);

// export const updateEmployee = (id, updatedEmployee) => axios.put(`${API_BASE_URL}/${id}`, updatedEmployee);

import axios from 'axios';

const API_BASE_URL = "http://localhost:3001/employees";

export const ListEmploye = () => axios.get(API_BASE_URL);

export const createEmployee = (employee) => axios.post(API_BASE_URL, employee);

export const getEmployeeById = (id) => axios.get(`${API_BASE_URL}/${id}`);

export const updateEmployee = (id, updatedEmployee) => axios.put(`${API_BASE_URL}/${id}`, updatedEmployee);

export const deleteEmployee = (id, deletedEmployee) => axios.delete(`${API_BASE_URL}/${id}`);


