const { MongoClient, ServerApiVersion } = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@main.rzq5zrk.mongodb.net/?retryWrites=true&w=majority&appName=main`;

const client = new MongoClient(connectionString, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectDB() {
    try {
        await client.connect();

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
} finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

module.exports = connectDB;