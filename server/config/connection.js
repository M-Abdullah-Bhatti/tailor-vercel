const mongoose = require('mongoose');


// console.log("Mongouri is:", process.env.MONGODBURI)

mongoose.connect(
  "mongodb+srv://abdullah:abdullahimdad@taylor-app.twfkkq7.mongodb.net/?retryWrites=true&w=majority"
  // process.env.MONGODB_URI 
  // ||
  
  //  'mongodb://localhost:27017/tailorthrift-wymore'
   ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
