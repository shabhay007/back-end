const app = require("./app");
require("dotenv").config({path:"./env/config.env"});
const connectDatabase = require("./config/database");



// Connecting to database
connectDatabase();



const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

