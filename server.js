const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Placeholder for future form submission
/*
app.post('/submit-resume', (req, res) => {
  console.log('Form Data:', req.body);
  res.redirect('/resume');
});
*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});