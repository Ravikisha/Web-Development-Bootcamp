const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Define a simple schema and model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// POST method to create a new user
app.post('/users', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Create a new user document
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// Middleware to require authentication for sensitive routes
function requireAuth(req, res, next) {
    const token = req.headers['authorization'];
    if (!token || token !== `Bearer ${process.env.API_SECRET}`) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
}

// GET method to retrieve all users (protected, excludes password field)
app.get('/users', requireAuth, async (req, res) => {
    try {
        const users = await User.find().select('-password'); // Fetch all users, excluding passwords
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
