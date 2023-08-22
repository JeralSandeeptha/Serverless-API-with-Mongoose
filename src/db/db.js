const mongoose = require('mongoose');

let conn = null;

const uri = 'mongodb+srv://jeral:0529@socialmediaappone.apqdudg.mongodb.net/?retryWrites=true&w=majority';

module.exports = connectDatabase = async () => {

  if (conn == null) {
    console.log("Create a new connection.");
    conn = await mongoose.connect(uri);
    return conn;
  }

  console.log("Connection already established.");
};