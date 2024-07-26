// import Question from './Component/Question';
import EmployeData from "./EmployeData/EmployeData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ListEmploye } from './EmployeData/ListEmploye';
import AddEmployee from "./EmployeData/AddEmployee";
import Count from "./Component/Count";
import CounterUseState from "./Component/CounterUseState";
import Country from "./Component/Country";
import RemoveUser from "./Component/RemoveUser";
import Table from "./Component/Table";
import SignUpForm from "./Component/SignUpForm";
import TimeBomb from "./Component/TimeBomb";
import HookMouse from "./Component/HookMouse";
import MouseContainer from "./Component/MouseContainer";
import UpdateEmployee from "./EmployeData/UpdateEmployee";
import DeleteEmployee from "./EmployeData/DeleteEmployee";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<EmployeData />}></Route>
          <Route path="/employees" element={<EmployeData />}></Route>
          <Route path="/add-employee" element={<AddEmployee />}></Route>
          <Route path="/employees/:id/update" element={<UpdateEmployee/>}></Route>
           
        </Routes>
      </BrowserRouter>

      {/* <Count/> */}
      {/* <CounterUseState/> */}
      {/* <Country newCountryName={"Dubai"}/> */}
      {/* <RemoveUser/> */}
      {/* <SignUpForm/> */}
      <TimeBomb/>
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
    </div>
  );
}

export default App;




// App.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get('http://localhost:8080/tests/1/questions')
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="App">
//     <img src="" alt="" />
//       <h1>Quiz</h1>
//       {data && data.map((item) => (
//         <div key={item.id}>
//           <h2>{item.question}</h2>
//           <ul>
//             {item.options.map((option) => (
//               <li key={option.id}>{option.option}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
