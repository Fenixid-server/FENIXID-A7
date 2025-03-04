const { MongoClient } = require('mongodb');

// MongoDB URI and database name
const uri = 'mongodb+srv://FENIXIDPUBLICURL:FENIXIDPUBLICURL@cluster0.aahbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // replace with your MongoDB URI
const dbName = 'FENIXIDPUBLICURL'; // replace with your database name

// MongoDB client instance
let db;

// Connect to MongoDB
async function connectToDB() {
  if (!db) {
    try {
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      console.log('Connected to MongoDB');
      db = client.db(dbName);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('MongoDB connection failed');
    }
  }
}

// password 
function getContactsCollection() {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db.collection('mypassword123'); //enter here any passkey
}

// Get the authentication collection
function getAuthCollection() {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db.collection('google_auth');
}

module.exports = { connectToDB, getContactsCollection, getAuthCollection };
