const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // To allow cross-origin requests (if needed)
const bodyParser = require('body-parser'); // To parse request bodies
const bcrypt = require('bcryptjs');

// Your user schema and model
const User = require('./models/user');

mongoose.connect('mongodb+srv://kartik:fZ62hgEm57UG9Vx6@demo.cvdcgwc.mongodb.net/?retryWrites=true&w=majority&appName=demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register endpoint
app.post('/register', async (req, res) => {
    const { email, phoneNumber, password } = req.body;
  
    // Additional validation (optional)
  
    try {
      const newUser = new User({ email, phoneNumber, password });
      await newUser.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Registration failed' });
    }
  });
  

// Login endpoint
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({ message: 'Invalid username or password' });
        }

        // Successful login (replace with JWT token generation if needed)
        res.send({ message: 'Login successful', user });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error' });
    }
});

app.listen(5000, () => console.log('Server listening on port 5000'));
