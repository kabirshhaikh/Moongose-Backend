const express = require("express");
const route = require("./src/routes/routes");
const bodyParser = require("body-parser");
// const mongoConnect = require("./src/Util/database");
const moongose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
const PORT = 4000;

// mongoConnect((client) => {
//   console.log(client);
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });
// });

moongose
  .connect(
    "mongodb+srv://kabir_shhaikh:cWNdzBEfcOOPmcGW@kabir.5td6tgo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Moongose Connected!");
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
