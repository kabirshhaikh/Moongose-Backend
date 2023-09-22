const mongodb = require("mongodb");

const MongoDbClient = mongodb.MongoClient;

const mongoDbConnect = (callback) => {
  MongoDbClient.connect('mongodb+srv://kabir_shhaikh:cWNdzBEfcOOPmcGW@kabir.5td6tgo.mongodb.net/?retryWrites=true&w=majority')
    .then((client) => {
      console.log("Mongo Db Connection Successful!");
      callback(client);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = mongoDbConnect;
