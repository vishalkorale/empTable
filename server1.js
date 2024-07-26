const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/List_of_employes')
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

const employeeSchema = new mongoose.Schema({
  employeeId: { type: Number, required: true },
  firstName: String,
  lastName: String,
  email: String
}, { collection: 'employesData' });

const Employee = mongoose.model('Employee', employeeSchema);

app.use(bodyParser.json());
app.use(cors());

app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/employees', async (req, res) => {
  console.log('POST /employees route hit');
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    console.log('Error saving employee:', err);
    res.status(500).send(err);
  }
});


app.get('/employees/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;

    const employee = await Employee.findOne({ employeeId : employeeId });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.put('/employees/:id', async (req, res) => {
//   try {
//     const employeeId = req.params.id;
    
//     const updatedEmployee = await Employee.findOneAndUpdate({ employeeId: employeeId }, req.body, { new: true });

//     if (!updatedEmployee) {
//       return res.status(404).json({ message: 'Employee not found' });
//     }

//     res.status(200).json(updatedEmployee);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(err);
//   }
// });

app.put('/employees/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    
    // Find the employee by employeeId and update their data
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeId: employeeId }, // Find employee by employeeId
      req.body, // Updated data from request body
      { new: true } // Return the updated document
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(updatedEmployee);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

app.delete('/employees/:id', async (req, res) => {
  try {
    const employeeId = req.params.id;
    const deletedEmployee = await Employee.findOneAndDelete({ employeeId: employeeId });

    if (!deletedEmployee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json({ message: `Deleted employee with ID ${employeeId}` });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
