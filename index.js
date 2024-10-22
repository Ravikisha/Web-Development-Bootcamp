const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected successfully to MongoDB");

        // Specify the database to use
        const database = client.db("mydatabase"); // Replace with your database name
        const collection = database.collection("mycollection"); // Replace with your collection name

        // Perform operations here (e.g., find, insert, update, delete)
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

run().catch(console.dir);
