const mongoose = require('mongoose');

// Connection URI
const uri = "mongodb://localhost:27017/mydatabase"; // Replace with your MongoDB connection string and database

// Connecting to MongoDB
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

// Example: Defining a simple schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

// Example: Creating a new document
const newUser = new User({ name: "John Doe", email: "john@example.com", age: 30 });

newUser.save()
    .then(user => console.log("User saved:", user))
    .catch(err => console.error("Error saving user:", err));
