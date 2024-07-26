const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3001;


const questionsPath = path.join(__dirname, 'QuestionData.json');
const jsonData = JSON.parse(fs.readFileSync(questionsPath, 'utf8'));

app.use(cors());

app.get('/question', (req, res) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
