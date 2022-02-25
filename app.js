//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB =
  'mongodb+srv://m001-student:m001-student>@sandbox.ixb5c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
