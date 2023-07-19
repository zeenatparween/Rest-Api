const mongoose = require("mongoose");

uri = ""
const ConnectDB = () => {
     console.log("yes I am Connected")
    return mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
};

module.exports = ConnectDB;
