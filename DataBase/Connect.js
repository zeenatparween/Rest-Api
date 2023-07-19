const mongoose = require("mongoose");

uri = "mongodb+srv://zeenataziz9019:HUUtqpH5NwKfjn2G@zeenatapi.c7zrefc.mongodb.net/zeenatAPI?retryWrites=true&w=majority"
const ConnectDB = () => {
     console.log("yes I am Connected")
    return mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
};

module.exports = ConnectDB;